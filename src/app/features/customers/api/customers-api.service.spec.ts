import { TestBed } from '@angular/core/testing';
import { CustomersApiService } from './customers-api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ICustomersFilter} from '@features/customers/model/ICustomersFilter';
import {HttpClientModule, HttpRequest} from '@angular/common/http';
import {ICustomers} from '@features/customers/model/ICustomers';

describe('ApiService', () => {
  let service: CustomersApiService;
  let httpMock: HttpTestingController;
  const customersListMock = {} // todo create method to create a mock data into @test-utils/setup-test-data

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        CustomersApiService,
      ]
    });
    service = TestBed.inject(CustomersApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create an instance successfully', () => {
    expect(service).toBeDefined();
  });

  it('should call POST api url and return all channels', () => {
    let actualData: ICustomers[];
    const filter: ICustomersFilter = {}; // todo create a mock filter

    service.getAllCustomerss(filter).subscribe(data => actualData = data);

    httpMock.expectOne((req: HttpRequest<any>) => {
      return req.url === `get list API URL` // todo inster here the get list API URL
        && req.method === 'POST'
    },  `GET all pages from API URL`)
      .flush(customersListMock);
    const expect: any = null; // todo create expected mock value ex. channelListMock.channelAdapterList
    expect(actualData).toEqual(expect);
    expect(actualData.length).toBe(2); // todo set the right number of mock values
  });

  it('should call POST api save URL: and return inserted channel', () => {
    let actualData: ICustomers;
    const newCustomers: ICustomers = null; // todo create mock newChannel for example channelListMock.channelAdapterList[0]
    service.createCustomers(newCustomers).subscribe(data => actualData = data);

    httpMock.expectOne((req: HttpRequest<any>) => {
      return req.url === `API_SAVE_URL` // todo insert here the api save url
        && req.method === 'POST'
    },  `CREATE new customers from API_SAVE_URL`)
      .flush(null /* todo create a mockData ex. channelListMock.channelAdapterList[0]*/);
    const expect: any = null; // todo create expected mock value ex. channelListMock.channelAdapterList[0]
    expect(actualData).toEqual(expect);
  });

  it('should call POST update_api_url and return updated customers', () => {
    let actualData: ICustomers;
    let customersUpdated: ICustomers = null; // todo cretae a mock channel ex. channelListMock.channelAdapterList[0];
    // todo update the mock object ex. channelUpdated.description = 'changed';
    service.updateCustomers(customersUpdated).subscribe(data => actualData = data);

    httpMock.expectOne((req: HttpRequest<any>) => {
      return req.url === `update api url` //todo insert here the update api url
        && req.method === 'POST'
    },  `POST update channel from: from update api url`) //todo insert here the update api url
      .flush(customersUpdated);

    expect(actualData).toEqual(customersUpdated);
  });

  it('should call POST delete api url and return id of removed customers', () => {
    let actualData: string;
    let idToRemove = 'id_to_remove_val';
    let mockData = null; // todo create mock data

    service.deleteCustomers(idToRemove).subscribe(data => actualData = data);

    httpMock.expectOne((req: HttpRequest<any>) => {
      return req.url === `delete api url` //todo insert here the delete api url
        && req.method === 'POST'
    },  `POST delete customers from: update api url`) //todo insert here the delete api url
      .flush(mockData);

    expect(actualData).toEqual(idToRemove);
  });
})
