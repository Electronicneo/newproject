import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap, switchMap, mergeMap} from 'rxjs/operators';
import { of } from 'rxjs';
import * as CustomersActions from './customers.actions';
import {CustomersApiService} from '@features/customers/api/customers-api.service';
import {defaultSuccessMessage, warningMessage} from 'shared';

@Injectable()
export class CustomersEffects {

  constructor(private actions$: Actions, private CustomersApi: CustomersApiService ) {}

  loadCustomerss = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomersActions.loadCustomerss),
      mergeMap(({filter}) => this.CustomersApi.getAllCustomerss(filter)
        .pipe(
          map(data => CustomersActions.loadCustomerssSuccess({Customerss: data})),
          catchError(error => of(CustomersActions.loadCustomerssFailure({error})))
        ))
    ));

  addCustomers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomersActions.addCustomers),
      concatMap(({Customers}) =>
        this.CustomersApi.createCustomers(Customers).pipe(
          switchMap((CustomersAdded: any) => [
            CustomersActions.addCustomersSuccess({ Customers: CustomersAdded }),
            CustomersActions.setSuccessState({success: true}),
            defaultSuccessMessage()
          ]),
          catchError(error => of(warningMessage({message: error}))))
        )
      );
  });

  removeCustomers$ = createEffect (() => {
    return this.actions$.pipe(
      ofType(CustomersActions.removeCustomers),
      concatMap(({CustomersId}) =>
        this.CustomersApi.deleteCustomers(CustomersId).pipe(
          switchMap(() => [
            CustomersActions.removeCustomersSuccess({CustomersCode: CustomersId}),
            defaultSuccessMessage(),
            CustomersActions.setSuccessState({success: true}),
          ]),
          catchError(error => of(warningMessage({message: error}))))
      ));
  });

  updateCustomers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomersActions.updateCustomers),
      concatMap(({Customers}) =>
        this.CustomersApi.updateCustomers(Customers).pipe(
          switchMap((CustomersUpdated: any) => [
            CustomersActions.updateCustomersSuccess({ Customers: CustomersUpdated }),
            defaultSuccessMessage(),
            CustomersActions.setSuccessState({success: true}),
          ]),
          catchError(error => of(warningMessage({message: error}))))
      )
    );
  });
}


