import { Injectable } from '@angular/core';
import { ICustomers } from '@features/customers/model/ICustomers';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardViewService {
 public formCard: boolean = false;
 public viewTable: boolean = true;
 public viewCard: boolean = false;
 private subject = new Subject<any>();
  constructor() { }
  
  sendClickEvent(customers: ICustomers){
    this.subject.next(customers);
  }
  getClickEvent():Observable<any>{
    return this.subject.asObservable();
  }
}
