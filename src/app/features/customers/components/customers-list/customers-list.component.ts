import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ICustomers} from '@features/customers/model/ICustomers';


@Component({
  selector: 'csm-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  @Input() customerss$: Observable<ICustomers[]>;
  @Input() cols: {field: string, header: string, display: string} [];
  @Output('customersSelected') customersSelectedEmitter = new EventEmitter<ICustomers>();

  constructor() { }

  ngOnInit() { }

  onRowSelect(event) {
    this.customersSelectedEmitter.emit(event.data);
  }

}
