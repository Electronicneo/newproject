import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromCustomers from './store/customers.reducer';
import {ICustomers} from '@features/Customers/model/ICustomers';
import {selectAllEntities, selectCustomersSuccessState, selectCustomersIsLoadingState} from '@features/customers/store/customers.selectors';
import {ICustomersFilter} from '@features/Customers/model/ICustomersFilter';
import {
  addCustomers,
  loadCustomerss,
  removeCustomers,
  setSuccessState,
  updateCustomers
} from '@features/customers/store/customers.actions';
import {CustomersApiService} from '@features/customers/api/customers-api.service';
import {Observable} from 'rxjs';
import {AccessCheckerService} from 'shared';

@Injectable({
  providedIn: 'root'
})

export class CustomersFacadeService {
  customerss$ = this.store.select(selectAllEntities);
  customersSuccessState$ = this.store.select(selectCustomersSuccessState);
  customersIsLoadingState$ = this.store.select(selectCustomersIsLoadingState);

  constructor(private store: Store<fromCustomers.ICustomersState>,
              private customersAPI: CustomersApiService,
              public acs : AccessCheckerService) { }

  public loadCustomers(customersFilter: ICustomersFilter){
    this.store.dispatch(loadCustomerss({filter: customersFilter}));
  }

  public saveCustomers(customers: ICustomers){
    this.store.dispatch(addCustomers({Customers: customers}));
  }

  public removeCustomers(customers: ICustomers){
    this.store.dispatch(removeCustomers({CustomersCode: customers.customersCode}));
  }

  public updateCustomers(customers: ICustomers){
    this.store.dispatch(updateCustomers({Customers: customers}));
  }

  public setSuccessState(flag: boolean) {
    this.store.dispatch(setSuccessState({success: flag}))
  }

}
