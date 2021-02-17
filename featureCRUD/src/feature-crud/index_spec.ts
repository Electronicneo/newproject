import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';


const collectionPath = path.join(__dirname, '../collection.json');


describe('feature-crud', () => {
  it('works', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner.runSchematicAsync('feature-crud', {}, Tree.empty()).toPromise();

    expect(tree.files).toEqual([]);
  });
});
