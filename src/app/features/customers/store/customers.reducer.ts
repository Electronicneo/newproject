import { Action, createReducer, on } from '@ngrx/store';
import * as CustomersActions from './customers.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {ICustomers} from '@features/customers/model/ICustomers';

export const customersFeatureKey = 'Customers';
export const adapterCustomers: EntityAdapter<ICustomers> = createEntityAdapter<ICustomers>();
export const initialCustomersState: ICustomersState = adapterCustomers.getInitialState({success: true, isLoading: false});

export interface ICustomersState extends EntityState<ICustomers> {
  success: boolean;
  isLoading: boolean;
}

const CustomersReducer = createReducer(
  initialCustomersState,
  on(CustomersActions.loadCustomerssSuccess, (customerState, action) => {
    let newState =  adapterCustomers.removeAll(customerState);
    customerState = adapterCustomers.upsertMany(action.Customerss, newState);
    newState = {...customerState , isLoading : false }  
   return newState;
  //  let newState = {...customerState, customerState: adapterCustomers.removeAll(customerState) };     
  //  newState = {...newState, customerState: adapterCustomers.upsertMany(action.Customerss, customerState) };    
  // newState = {...newState , isLoading : false };
 //  return newState;
  }),
  on(CustomersActions.loadCustomerss, (state, action) => (
      {... state , isLoading : true}
    )),
  on(CustomersActions.loadCustomerssFailure, (state, action) => state),
  on(CustomersActions.addCustomersSuccess, (state, action) => {
    return  adapterCustomers.upsertOne(action.Customers, state) 
    }),
  on(CustomersActions.removeCustomersSuccess, (state, action) =>{
    return adapterCustomers.removeOne(action.CustomersCode, state) }),
  on(CustomersActions.addCustomersFailure, (state, action) => state ),
  on(CustomersActions.updateCustomersSuccess,(state, action) => {
    return adapterCustomers.upsertOne(action.Customers, state) 
  }),
  on(CustomersActions.setSuccessState, (state, action) => {
    return {...state , success : action.success};
  })
);

export function reducer(state: ICustomersState | undefined, action: Action) {
  return CustomersReducer(state, action);
}

export const CustomersDefaultSelectors: {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapterCustomers.getSelectors();
