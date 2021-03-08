import { createAction, props } from '@ngrx/store';
import {ICustomersFilter} from '@features/customers/model/ICustomersFilter';
import {ICustomers} from '@features/customers/model/ICustomers';


// LOAD-Customers
export const loadCustomerss = createAction(
  '[Customers] Load Customerss',
  props<{filter: ICustomersFilter}>()
);

export const loadCustomerssSuccess = createAction(
  '[Customers] Load Customerss Success',
  props<{ Customerss: ICustomers[] }>()
);

export const loadCustomerssFailure = createAction(
  '[Customers] Load Customerss Failure',
  props<{ error: any }>()
);

// ADD-Customers
export const addCustomers = createAction(
  '[Customers] Add Customers',
  props<{Customers: ICustomers}>()
);

export const addCustomersSuccess = createAction(
  '[Customers] Add Customers Success',
  props<{ Customers: ICustomers}>()
);

export const addCustomersFailure = createAction(
  '[Customers] Add Customers Failure',
  props<{ errorMessage: string }>()
);

// REMOVE-Customers
export const removeCustomers = createAction(
  '[Customers] Remove Customers',
  props<{CustomersId: string}>()
);

export const removeCustomersSuccess = createAction(
  '[Customers] Remove Customers Success',
  props<{CustomersCode: string}>()
);

export const removeCustomersFailure = createAction(
  '[Customers] Remove Customers Failure',
  props<{ error: any }>()
);

// UPDATE-Customers
export const updateCustomers = createAction(
  '[Customers] Update Customers',
  props<{Customers: ICustomers}>()
);

export const updateCustomersSuccess = createAction(
  '[Customers] Update Customers Success',
  props<{Customers: ICustomers}>()
);

export const updateCustomersFailure = createAction(
  '[Customers] Update Customers Failure',
  props<{ error: any }>()
);

// SUCCESS
export const setSuccessState = createAction(
  '[Customers] Set Success Status',
  props<{ success: boolean }>()
);
