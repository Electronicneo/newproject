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
     endPoint=`http://localhost:3000/customerss/`;
  
  
    constructor(private httpClient: HttpClient) { }

    getAllCustomerss(filter: ICustomersFilter): Observable<ICustomers[]> {
        let endPoint1=`http://localhost:3000/customerss?name=${filter.name}`;
        if(filter.name==""){
            endPoint1=this.endPoint;
        }
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpClient.get<ICustomers[]>(endPoint1,{headers: headers}).pipe(
        map((data: any) => {
            let customersList: ICustomers[] = [];
            if(data){
                data.forEach(data =>{
                    customersList.push({ id: data.id, name: data.name, address: data.address, streetNumber: data.streetNumber, city:data.city, country:data.country});
                });
            }
            return customersList;
           
        }), catchError( error => {
            return throwError( 'getAllCustomerss Something went wrong! '+ error);
        })
        );
    }

    createCustomers(customers: ICustomers): Observable<ICustomers> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        if(customers.id==null){    
        return this.httpClient.post<ICustomers>(this.endPoint,customers).pipe(
        map((data: any) => {
                 return customers;
        }), catchError( error => {
            return throwError( error );
        })
        );
       }else{
            return this.httpClient.put<ICustomers>(this.endPoint+customers.id,customers ).pipe(
                map((data: any) => {
                     return customers;
            }), catchError( error => {
                return throwError( error );
            })
            );

        }
    }

    deleteCustomers(id: string): Observable<any> {

        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const body = { customersCode: id };
        return this.httpClient.delete(this.endPoint+id,{headers: headers}).pipe(
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
        return this.httpClient.put<ICustomers>(this.endPoint+customers.id,customers ).pipe(
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
