import * as fromCustomers from './customers.reducer';
import { selectCustomersState } from './customers.selectors';

describe('Customers Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCustomersState({
      [fromCustomers.customersFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
