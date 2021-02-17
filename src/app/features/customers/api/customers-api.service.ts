import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ICustomersFilter} from "../model/IcustomersFilter";
import {ICustomers} from "../model/Icustomers";

@Injectable({
    providedIn: 'root'
})

export class CustomersApiService {

    constructor(private httpClient: HttpClient) { }

    getAllCustomerss(filter: ICustomersFilter): Observable<ICustomers[]> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpClient.post<ICustomers[]>(`TODO insert here url`, JSON.stringify(filter),{headers: headers}).pipe(
        map((data: any) => {
            let customersList: ICustomers[] = [];
            if(data && data.customersAdapterList){
                data.customersAdapterList.forEach(data =>{
                    customersList.push({ id: data.customersCode, customersCode: data.customersCode, rootName: data.rootName, lastUpdUser: data.lastUpdUser});
                });
            }
            return customersList;
        }), catchError( error => {
            return throwError( 'getAllCustomerss Something went wrong! '+ error);
        })
        );
    }

    createCustomers(customers: ICustomers): Observable<ICustomers> {
        const body = this.makeBody(customers);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpClient.post<ICustomers>(`TODO insert here url`, JSON.stringify(body),{headers: headers}).pipe(
        map((data: any) => {
            let customers: ICustomers = null;
            if (data) {
                if (data.infos && data.infos.length > 0) {
                    let errorMessage: string= 'Create customers errors: ';
                    errorMessage = errorMessage.concat(data.infos.map((errInfo) => `err: ${errInfo.message}, code: ${errInfo.codeLabel} `));
                    throw new Error(errorMessage);
                }
                customers = this.makeResponse(data);
            }
            return customers;
        }), catchError( error => {
            return throwError( error );
        })
        );
    }

    deleteCustomers(customersCode: string): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const body = { customersCode: customersCode };
        return this.httpClient.post(`TODO insert here url` , JSON.stringify(body),{headers: headers}).pipe(
            map((data: any) => {
                if (data) {
                    if (data.infos && data.infos.length > 0) {
                        let errorMessage: string= 'Remove customers errors: ';
                        errorMessage = errorMessage.concat(data.infos.map((errInfo) => `err: ${errInfo.message}, code: ${errInfo.codeLabel} `));
                        throw new Error(errorMessage);
                    }
                }
            }), catchError( error => {
                return throwError( error );
            })
        );
    }

    updateCustomers(customers: ICustomers): Observable<any> {
        const body = this.makeBody(customers);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpClient.post<ICustomers>(`TODO insert here url`, JSON.stringify(body),{headers: headers}).pipe(
            map((data: any) => {
                let customers: ICustomers = null;
                if (data) {
                    if (data.infos && data.infos.length > 0) {
                        let errorMessage: string= 'Update customers errors: ';
                        errorMessage = errorMessage.concat(data.infos.map((errInfo) => `err: ${errInfo.message}, code: ${errInfo.codeLabel} `));
                        throw new Error(errorMessage);
                    }
                customers = this.makeResponse(data);
            }
            return customers;
        }), catchError( error => {
            return throwError( error );
        })
        );
    }


    private makeBody(customers: ICustomers): any {
        return null;
    }

    private makeResponse(data: any): ICustomers {
        return null;
    }


}
