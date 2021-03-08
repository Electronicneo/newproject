import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ICustomers} from '@features/customers/model/ICustomers';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import { CardComponent } from 'src/app/card/card.component';
import { CardFormComponent } from '../card-form/card-form.component';
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  @Input() customerss$: Observable<ICustomers[]>;
  @Input() cols: {field: string, header: string, display: string} [];
  @Output('customersSelected') customersSelectedEmitter = new EventEmitter<ICustomers>();

  constructor( private dialogService: NbDialogService) { }
 
  ngOnInit(): void {
   // this.customerss$.subscribe(customers=>console.log(customers))
   console.log(this.customerss$);
  }
  onRowSelect(event) {
    this.customersSelectedEmitter.emit(event.data);
  }
  open() {
    this.dialogService.open(CardFormComponent)
      // .onClose.subscribe(name => name && this.names.push(name));
  }
}
