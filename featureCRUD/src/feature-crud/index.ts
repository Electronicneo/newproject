import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  mergeWith,
  SchematicsException, move, chain, externalSchematic, Source, applyTemplates,
} from '@angular-devkit/schematics';
import { Schema } from './schema';
// object strings containing helper string functions like dasherize, classify...
import {normalize, strings} from '@angular-devkit/core';
import {buildDefaultPath} from '@schematics/angular/utility/project';
import {parseName} from '@schematics/angular/utility/parse-name';
import {Observable} from 'rxjs';
import * as ts from 'typescript';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
  export function featureCRUD(_options: Schema): Rule {
    const FEATURE_PATH = 'features/';
    let parentFeature = FEATURE_PATH + (_options.parentFeature ? _options.parentFeature : '') + '/';

    return chain([
      externalSchematic('@schematics/angular', 'module', getModuleOptions(parentFeature, _options)),
      externalSchematic('@schematics/angular', 'component', getContainerOptions(parentFeature, _options)),
      externalSchematic('@schematics/angular', 'component', getComponentsOptions(parentFeature, _options, '-form')),
      externalSchematic('@schematics/angular', 'component', getComponentsOptions(parentFeature, _options, '-filter')),
      externalSchematic('@schematics/angular', 'component', getComponentsOptions(parentFeature, _options, '-list')),
      externalSchematic('@schematics/angular', 'service', getServiceFacadeOptions(parentFeature, _options)),
      externalSchematic('@ngrx/schematics', 'feature', getFeatureOptions(parentFeature, _options)),
      //UPDATE TREE
      (tree: Tree, _context: SchematicContext) => updateModelAndFacade(tree, _context, _options, parentFeature, 'model' ),
      (tree: Tree, _context: SchematicContext) => updateModelAndFacade(tree, _context, _options, parentFeature, 'api'),
      (tree: Tree, _context: SchematicContext) => updateComponentHtml(tree, _context, _options, parentFeature, 'container'),
      (tree: Tree, _context: SchematicContext) => updateComponentModule(tree, _context, _options, parentFeature),
      (tree: Tree, _context: SchematicContext) => updateControllerTs(tree, _context, _options, parentFeature, 'container' ),
      (tree: Tree, _context: SchematicContext) => updateStore(tree, _context, _options, parentFeature),
      (tree: Tree, _context: SchematicContext) => updateModelAndFacade(tree, _context, _options, parentFeature, 'facade'),
      (tree: Tree, _context: SchematicContext) => updateComponentHtml(tree, _context, _options, parentFeature, 'filter'),
      (tree: Tree, _context: SchematicContext) => updateControllerTs(tree, _context, _options, parentFeature, 'filter' ),
      (tree: Tree, _context: SchematicContext) => updateComponentHtml(tree, _context, _options, parentFeature, 'list'),
      (tree: Tree, _context: SchematicContext) => updateControllerTs(tree, _context, _options, parentFeature, 'list' ),
      (tree: Tree, _context: SchematicContext) => updateComponentHtml(tree, _context, _options, parentFeature, 'form'),
      (tree: Tree, _context: SchematicContext) => updateControllerTs(tree, _context, _options, parentFeature, 'form' ),
      (tree: Tree, _context: SchematicContext) => updateRoutingModule(tree, _context, _options, parentFeature),
      // unitTest
      //(tree: Tree, _context: SchematicContext) => updateAPIUnitTest(tree, _context, _options, parentFeature),
      //(tree: Tree, _context: SchematicContext) => updateAPIUnitTestRefactored(tree, _context, _options, parentFeature, 'store')
    ]);
  }
  function getServiceFacadeOptions(feature_path: string, options: any) : any {
    let componetName = options.name;
    let facadeName = feature_path + componetName + '/' + componetName + 'Facade';
    let facadeOptions = Object.assign('', options);
    facadeOptions.name = facadeName;
    return facadeOptions;
  }

  function getFeatureOptions(feature_path: string, options: any) : any {
    let componetName = options.name;
    let featureName = feature_path + componetName + '/store/' + componetName;
    let featureOptions = Object.assign('', options);
    featureOptions.name = featureName;
    featureOptions.flat = true;
    featureOptions.spec = false;
    featureOptions.module = feature_path + componetName;
    //featureOptions.api = false;
    //featureOptions.creators = false;
    return featureOptions;
  }

  function getContainerOptions(feature_path: string, options: any) : any {
    let componetName = options.name;
    let containerName = feature_path + componetName + '/container/' + componetName;
    let containerOptions = Object.assign('', options);
    containerOptions.name = containerName;
    containerOptions.module = options.name;
    containerOptions.flat = true;
    return containerOptions;
  }

  function getComponentsOptions(feature_path: string, options: any, typeComponent: string): any {
    let componetName = options.name;
    let containerName = feature_path + componetName + '/components/' + componetName + typeComponent;
    let containerOptions = Object.assign('', options);
    containerOptions.name = containerName;
    containerOptions.module = options.name;
    containerOptions.flat = false;
    return containerOptions;
  }

    function getDefaultProjectPath(options: Schema, tree: Tree, parentFeature: string): string {
      const defaultPath = getDefaultPath(options, tree);
      return normalize(defaultPath + '/' + parentFeature + '/' + options.name);
    }

    function getDefaultPath(options: Schema, tree: Tree): string {
      // read angular.json file ad buffer
      const workspaceConfigBuffer = tree.read('angular.json');
      if (!workspaceConfigBuffer) {
        throw new SchematicsException('Not an Angular CLI workspace');
      }

      //parse config
      const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
      const projectName = options.project || workspaceConfig.defaultProject;

      //get the project definition
      const project = workspaceConfig.projects[projectName];

      //get the deault path for project
      return buildDefaultPath(project);
    }



function updateControllerTs(tree: Tree, _context: SchematicContext, options: Schema, parentFeature: string, controllerType: string): void | Rule | Tree | Observable<Tree> | Promise<void> | Promise<Rule> {
  const defaultProjectPath = getDefaultProjectPath(options, tree, parentFeature);
  const parsedPath = parseName(defaultProjectPath, options.name);
  let oldControllerFile = '';
  let oldControllerUnitTestFile = '';
  let sourceTemplates: Source = url('');

  if(controllerType === 'container') {
    parsedPath.path = normalize(parsedPath.path + '/' + controllerType);
    oldControllerFile = normalize(parsedPath.path + '/' + options.name + '.component.ts');
    oldControllerUnitTestFile = normalize(parsedPath.path + '/' + options.name + '.component.spec.ts');
  }else {
    parsedPath.path = normalize(parsedPath.path + '/' + 'components/' + options.name + '-' + controllerType);
    oldControllerFile = normalize(parsedPath.path + '/' + options.name + '-' + controllerType + '.component.ts');
  }

  if(tree.exists(oldControllerFile)) {
    tree.delete(oldControllerFile);
  }
  if(tree.exists(oldControllerUnitTestFile)) {
    tree.delete(oldControllerUnitTestFile);
  }

  //get our templates folders & files
  sourceTemplates = url('./files/ts/'+controllerType);
  //parametrize our template sources
  const sourceParameterizedTEmplates: Source =  apply(sourceTemplates, [
    applyTemplates({
      ...options,
      ...strings,
    }),
    move(parsedPath.path)
  ]);

  //merge our template into the tree
  return mergeWith(sourceParameterizedTEmplates);
}

    function updateModelAndFacade(tree: Tree, _context: SchematicContext, options: Schema, parentFeature: string, fileType: string): void | Rule | Tree | Observable<Tree> | Promise<void> | Promise<Rule> {
      const defaultProjectPath = getDefaultProjectPath(options, tree, parentFeature);
      const parsedPath = parseName(defaultProjectPath, options.name);
      if(fileType === 'facade') {
        parsedPath.path = normalize(parsedPath.path);
        const oldFacadeFile = normalize(parsedPath.path+'/' + options.name + '-facade.service.ts');
        if(tree.exists(oldFacadeFile)) {
          tree.delete(oldFacadeFile);
        }
      }else{
        parsedPath.path = normalize(parsedPath.path + '/'+fileType);
      }
      //get our templates folders & files
      const sourceTemplates = url('./files/'+fileType);
      //parametrize our template sources
      const sourceParameterizedTEmplates: Source =  apply(sourceTemplates, [
        applyTemplates({
          ...options,
          ...strings,
        }),
        move(parsedPath.path)
      ]);

      //merge our template into the tree
      return mergeWith(sourceParameterizedTEmplates) ;
    }

  function updateComponentHtml(tree: Tree, _context: SchematicContext, options: Schema, parentFeature: string, componentType: string): void | Rule | Tree | Observable<Tree> | Promise<void> | Promise<Rule> {
    const defaultProjectPath = getDefaultProjectPath(options, tree, parentFeature);
    const parsedPath = parseName(defaultProjectPath, options.name );
    let sourceTemplates: Source = url('');
    let oldCompHtmlFile = '';

    if(componentType === 'container'){
      parsedPath.path = normalize(parsedPath.path + '/container');
      oldCompHtmlFile =  normalize(parsedPath.path + '/' +  options.name + '.component.html');
      sourceTemplates = url('./files/html/container');
    }else {
      parsedPath.path = normalize(parsedPath.path + '/components/' + options.name + '-' + componentType);
      oldCompHtmlFile = normalize(parsedPath.path + '/' + options.name + '-' + componentType + '.component.html');
      sourceTemplates = url('./files/html/' + componentType);
    }
    if(tree.exists(oldCompHtmlFile)) {
      tree.delete(oldCompHtmlFile);
    }
    const name = parsedPath.name;
    //parametrize our template sources
    const sourceParameterizedTEmplates: Source =  apply(sourceTemplates, [
      applyTemplates({
        ...strings,
        ...options,
        name
      }),
    move(parsedPath.path)
  ]);
    //merge our template into the tree
    return mergeWith(sourceParameterizedTEmplates) ;
  }

  function updateComponentModule(tree: Tree, _context: SchematicContext, options: Schema, parentFeature: string): void | Rule | Tree | Observable<Tree> | Promise<void> | Promise<Rule> {
    const defaultProjectPath = getDefaultProjectPath(options, tree, parentFeature);
    const compModulePath = normalize(defaultProjectPath + `/${strings.dasherize(options.name)}.module.ts`);

    const compModulePathBuffer = tree.read(compModulePath);
    if (!compModulePathBuffer) {
     throw new SchematicsException(`No ${strings.dasherize(options.name)}.module.ts found in ${defaultProjectPath} folder.`);
    }

    const source = ts.createSourceFile(defaultProjectPath, compModulePathBuffer.toString(), ts.ScriptTarget.Latest, true);
    const recorder = tree.beginUpdate(compModulePath);

    recorder.insertLeft(0, `import {SharedModule} from '../../shared/shared.module'; import {SharedModule as sharedLibModule} from 'shared';`);

    const commonModuleStartPos: number[] = [];
    getIdentifierByName(source, commonModuleStartPos, 'CommonModule');
    //take the second found element because the first is the import statment
    recorder.insertLeft(commonModuleStartPos[1], `sharedLibModule,SharedModule,`);

    tree.commitUpdate(recorder);
    return tree;
  }

  function getIdentifierByName(node: ts.Node, startPos: number[], identifierName: string) {
    if (node.kind === ts.SyntaxKind.Identifier && node!.getText() === identifierName) {
     startPos.push(node.getStart());
    }
    for (let child of node.getChildren()) {
     getIdentifierByName(child, startPos, identifierName);
    }
  }

    function getModuleOptions(feature_path: string, options: any) : any {
      let containerOptions = Object.assign('', options);
      containerOptions.name = feature_path + options.name;
      
      //containerOptions.module = feature_path;
      containerOptions.flat = false;
      containerOptions.routing = true;
      return containerOptions;
    }


function updateStore(tree: Tree, _context: SchematicContext, options: Schema, parentFeature: string): void | Rule | Tree | Observable<Tree> | Promise<void> | Promise<Rule> {
  const defaultProjectPath = getDefaultProjectPath(options, tree, parentFeature);
  const parsedPath = parseName(defaultProjectPath, options.name );

  parsedPath.path = normalize(parsedPath.path + '/store');

  const oldACtionsFile =  normalize(parsedPath.path + '/' + options.name + '.actions.ts');
  if(tree.exists(oldACtionsFile)) {
    tree.delete(oldACtionsFile);
  }

  const oldReducerFile =  normalize(parsedPath.path + '/' +  options.name + '.reducer.ts');
  if(tree.exists(oldReducerFile)) {
    tree.delete(oldReducerFile);
  }

  const oldReducerSpecFile =  normalize(parsedPath.path + '/' +  options.name + '.reducer.spec.ts');
  if(tree.exists(oldReducerSpecFile)) {
    tree.delete(oldReducerSpecFile);
  }

  const oldEffectsFile =  normalize(parsedPath.path + '/' +  options.name + '.effects.ts');
  if(tree.exists(oldEffectsFile)) {
    tree.delete(oldEffectsFile);
  }

  const oldSelectorsFile =  normalize(parsedPath.path + '/' +  options.name + '.selectors.ts');
  if(tree.exists(oldSelectorsFile)) {
    tree.delete(oldSelectorsFile);
  }

  //get our templates folders & files
  const sourceTemplates = url('./files/store');
  const name = parsedPath.name;

  //parametrize our template sources
  const sourceParameterizedTEmplates: Source =  apply(sourceTemplates, [
    applyTemplates({
      ...strings,
      ...options,
      name
    }),
    move(parsedPath.path)
  ]);
  //merge our template into the tree
  return mergeWith(sourceParameterizedTEmplates) ;
}



function updateRoutingModule(tree: Tree, _context: SchematicContext, options: Schema, parentFeature: string): void | Rule | Tree | Observable<Tree> | Promise<void> | Promise<Rule> {
  const defaultProjectPath = getDefaultProjectPath(options, tree, parentFeature);
  const routingModulePath = normalize(defaultProjectPath + `/${strings.dasherize(options.name)}-routing.module.ts`);

  const routingModulePathBuffer = tree.read(routingModulePath);
  if (!routingModulePathBuffer) {
    throw new SchematicsException(`No ${strings.dasherize(options.name)}.module.ts found in ${defaultProjectPath} folder.`);
  }
  const source = ts.createSourceFile(defaultProjectPath, routingModulePathBuffer.toString(), ts.ScriptTarget.Latest, true);
  const recorder = tree.beginUpdate(routingModulePath);
  recorder.insertLeft(0,
    `import {${strings.classify(options.name)}Component} from '@features/${options.name}/container/${options.name}.component';\n`
  );
  const routesStartPos: number[] = [];
  getVariablePropertyByVarName(source, 'routes', routesStartPos, );
  recorder.insertRight(routesStartPos[0] + 2, `{path: '', component: ${strings.classify(options.name)}Component},`);
  tree.commitUpdate(recorder);
  return tree;
}

function getVariablePropertyByVarName(node: ts.Node, varName: string, pos: number[]){
  if ((node.kind === ts.SyntaxKind.ArrayLiteralExpression)
    && node.parent.kind === ts.SyntaxKind.VariableDeclaration) {

    const varIDentifier = node.parent.getChildren().find(n => n.kind === ts.SyntaxKind.Identifier);

    if (varIDentifier!.getText() === varName) {
      pos.push(node.pos);
    }
  }

  for (let child of node.getChildren()) {
    getVariablePropertyByVarName(child, varName, pos);
  }
}

/*
function updateAPIUnitTest(tree: Tree, _context: SchematicContext, options: Schema, parentFeature: string): void | Rule | Tree | Observable<Tree> | Promise<void> | Promise<Rule> {
  const defaultProjectPath = getDefaultProjectPath(options, tree, parentFeature);
  const parsedPath = parseName(defaultProjectPath, options.name );

  parsedPath.path = normalize(parsedPath.path + "/api");

  const oldUnitTestFile =  normalize(parsedPath.path + "/" + options.name + "-api.service.spec.ts");
  if(tree.exists(oldUnitTestFile)) {
    tree.delete(oldUnitTestFile);
  }
  //get our templates folders & files
  const sourceTemplates = url('./files/api/unitTest');
  const name = parsedPath.name;

  //parametrize our template sources
  const sourceParameterizedTEmplates: Source =  apply(sourceTemplates, [
    applyTemplates({
      ...strings,
      ...options,
      name
    }),
    move(parsedPath.path)
  ]);
  //merge our template into the tree
  return mergeWith(sourceParameterizedTEmplates) (tree, _context);
}


function updateAPIUnitTestRefactored(tree: Tree, _context: SchematicContext, options: Schema, parentFeature: string, typeUnitTest: string): void | Rule | Tree | Observable<Tree> | Promise<void> | Promise<Rule> {
  const defaultProjectPath = getDefaultProjectPath(options, tree, parentFeature);
  const parsedPath = parseName(defaultProjectPath, options.name );
  //typeUnitTest = api/container/store
  parsedPath.path = normalize(`${parsedPath.path}/${typeUnitTest}` );
  let oldUnitTestFile = '';
  switch(typeUnitTest) {
    case 'api': {
      oldUnitTestFile =  normalize(parsedPath.path + "/" + options.name + "-api.service.spec.ts");
      break;
    }
    case 'container': {
      // todo;
      break;
    }
    case 'store': {
      oldUnitTestFile =  normalize(parsedPath.path + "/" + options.name + "-reducer.spec.ts");
      break;
    }
    default: {
      //statements;
      break;
    }
  }

  if(tree.exists(oldUnitTestFile)) {
    tree.delete(oldUnitTestFile);
  }

  //get our templates folders & files
  const sourceTemplates = url(`./files/${typeUnitTest}/unitTest`);
  const name = parsedPath.name;

  //parametrize our template sources
  const sourceParameterizedTEmplates: Source =  apply(sourceTemplates, [
    applyTemplates({
      ...strings,
      ...options,
      name
    }),
    move(parsedPath.path)
  ]);
  //merge our template into the tree
  return mergeWith(sourceParameterizedTEmplates) (tree, _context);
}

*/


/*
function getRoutesArray(node: ts.Node, startPos: number[], identifierName: string) {
  //console.log("getRoutesArray: node!.getText() ",  node.getChildren());
  if ((node.kind === ts.SyntaxKind.PropertyAssignment)) {
    console.log("getRoutesArray: text ",  node.getText());
    console.log("getRoutesArray: node ",  node);
    console.log("getRoutesArray: getChildren ", node.getChildren());
    let block = node!.getChildren().find(n => n.kind === ts.SyntaxKind.ArrayLiteralExpression );
    if(block){
      console.log("BLOCK!!!", block);
      startPos.push(block.pos);
    }
  }
  for (let child of node.getChildren()) {
    getRoutesArray(child, startPos, identifierName);
  }
}
*/



