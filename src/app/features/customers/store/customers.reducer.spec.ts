// import {initialState, reducer} from '../store/customers.reducer';
// import * as CustomersActions from './customers.actions'
// import {setupChannel, setupStoreChannelEntity, setupStoreChannelList} from '@test-utils/setup-test-data';
// import {ICustomers} from '@features/customers/model/ICustomers';

// describe('Customers Reducer', () => {

//   const customersList = {} // todo create mock store @test-utils/setupStoreChannelList();
//   const customersListStore =  {} // todo create mock store ex. @test-utils/setupStoreChannelEntity();
//   const newCustomers: ICustomers = {} // todo create mock @test-utils/setupChannel();

//   describe('Undefined action', () => {
//     it('should return default state', () => {
//       const action = { type: 'NOOP' } as any;
//       const result = reducer(undefined, action);
//       expect(result).toBe(initialState);
//     });
//   });

//   describe('[Customers] Load customerss Success', () => {
//     it('should set customerss list', () => {
//       const action = CustomersActions.loadCustomerssSuccess({customerss: customersList});
//       const result = reducer(initialState, action);
//       const expectedValue = {} // todo create a mock expected value
//       expect(result).toEqual({"customersState": expectedValue});
//     })
//   });

//   describe('[Customers] Add Customers Success', () => {
//     it('should add new customers', () => {
//       const action = CustomersActions.addCustomersSuccess({customers: newCustomers});
//       const result = reducer(initialState, action);
//       expect(result).toEqual({
//         channelState: {
//           ids: ['CH6A6MSG'], // todo insert mock id
//           entities: {CH6A6MSG: newChannel},
//           success: true
//         }
//       });
//     })
//   });

//   describe('[Customers] Remove Customers Success', () => {
//     it('should remove customers', () => {
//       const action = CustomersActions.removeCustomersSuccess({customersCode: null}); // todo insert a mock code
//       const newState = {
//         channelState: {
//           ids: ['CH6A6MSG'], // todo insert a mock id
//           entities: {CH6A6MSG: newCustomers}, // todo insert a mock id
//           success: true
//         }
//       }
//       const result = reducer(newState, action);
//       expect(result).toEqual({channelState: { ids: [], entities: {}, success: true }} );
//     })
//   });

//   describe('[Customers] Update Customers Success', () => {
//     it('should update customers', () => {
//       const customersUpdated: ICustomers = { } // todo insert here a mock customersUpdated
//       const action = CustomersActions.updateCustomersSuccess({customers: customersUpdated});
//       const newState = {
//         channelState: {
//           ids: ['CH6A6MSG'],
//           entities: {CH6A6MSG: newCustomers},
//           success: true
//         }
//       }
//       const result = reducer(newState, action);
//       expect(result).toEqual({
//         channelState: {
//           ids: ['CH6A6MSG'], // todo insert a mock id
//           entities: {CH6A6MSG: customersUpdated}, //todo insert a mock id
//           success: true
//         }
//       } );
//     })
//   });
// });
