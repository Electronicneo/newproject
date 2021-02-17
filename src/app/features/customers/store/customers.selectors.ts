import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomers from './customers.reducer';
import {CustomersDefaultSelectors} from './customers.reducer';

export const selectCustomersStateFeatureSelector = createFeatureSelector<fromCustomers.ICustomersState>(
  fromCustomers.customersFeatureKey
);

export const selectCustomersState = createSelector(selectCustomersStateFeatureSelector, (state) =>
  state);

// select the array of Entitys
export const selectAllEntities = createSelector(
  selectCustomersState,
  CustomersDefaultSelectors.selectAll
);

// select success
export const selectCustomersSuccessState = createSelector(selectCustomersStateFeatureSelector, (state) =>
  state.success);


// select isLOading
export const selectCustomersIsLoadingState = createSelector(selectCustomersStateFeatureSelector, (state) =>
    state.isLoading);

