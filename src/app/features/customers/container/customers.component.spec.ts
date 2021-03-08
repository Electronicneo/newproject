// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { CustomersComponent } from './customers.component';
// import {Store, StoreModule} from '@ngrx/store';
// import * as customersReducer from '../store/customers.reducer';
// import * as CustomersAction from '../store/customers.actions';
// import {NO_ERRORS_SCHEMA} from '@angular/core';
// import {state}from '@angular/animations';
// import {TranslateModule} from '@ngx-translate/core';
// import {HttpClientTestingModule} from '@angular/common/http/testing';
// import {NbDialogModule, NbLayoutModule, NbThemeModule, NbToastrModule} from '@nebular/theme';
// import * as fromRoot from "@angular/core";

// describe('CustomersComponent', () => {
//   let component: CustomersComponent;
//   let fixture: ComponentFixture<CustomersComponent>;
//   let store: Store<customersReducer.State>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CustomersComponent ],
//       imports: [StoreModule.forRoot(fromRoot.reducers),
//                 TranslateModule.forRoot(),
//                 HttpClientTestingModule,
//                 NbToastrModule.forRoot(),
//                 NbThemeModule.forRoot(),
//                 NbLayoutModule,
//                 NbDialogModule.forRoot()],
//       schemas: [ NO_ERRORS_SCHEMA ],
//     })
//     .compileComponents().then(() => {
//       fixture = TestBed.createComponent(CustomersComponent);
//       component = fixture.componentInstance;
//       store = TestBed.inject(Store);
//     });
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('shoud dispatch load customerss action when ngOnInit is invoked', () => {
//     const action = CustomersAction.loadCustomerss({filter: {/*TODO fill IStarshipFilter*/}});
//     const spy = jest.spyOn(store, 'dispatch');
//     fixture.detectChanges();
//     component.ngOnInit();
//     expect(spy).toHaveBeenCalledWith(action);
//   });
// });
