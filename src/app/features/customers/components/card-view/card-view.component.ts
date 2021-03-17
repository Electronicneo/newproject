import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICustomers } from '@features/customers/model/ICustomers';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { CardComponent } from 'src/app/card/card.component';
import { CardFormComponent } from '../card-form/card-form.component';
import { AccessCheckerService, DialogMessageComponent } from 'shared';
import { CustomersFacadeService } from '@features/customers/Customers-facade.service';
import { CardViewService } from 'src/app/card-view.service';
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  
  customersRow: ICustomers;
  @Input() customerss$: Observable<ICustomers[]>;
  @Input() cols: { field: string, header: string, display: string }[];
  @Output('customersSel') customersSelEmitter = new EventEmitter<ICustomers>();
  @Output('removeCustomer') removeCustomersEmitter = new EventEmitter();
  @Output('customersSelected') customersSelectedEmitter = new EventEmitter<ICustomers>();
  constructor(private dialogService: NbDialogService,
    private cardservice: CardViewService) { }
   
  ngOnInit(): void {
    // this.customerss$.subscribe(customers=>console.log(customers))
    console.log(this.customerss$);
  }

  onRowSelect(event) {
    this.customersSelectedEmitter.emit(event.data);
    
  }
  customersSel(customers: ICustomers){
    this.cardservice.formCard = true;
    this.cardservice.viewCard =false;
    this.cardservice.viewTable=false;
    this.customersSelEmitter.emit(customers);
   //this.cardservice.sendClickEvent(customers);
  }

  removeCustomers(customers: ICustomers) {
    this.dialogService.open(DialogMessageComponent, {
      context: {
        isConfirmationMode: true,
        title: 'Delete!',
        message: 'Are you sure you want to delete this customer?'
      }
    }).onClose.subscribe(isConfimrmed => {
      if (isConfimrmed) {
        this.removeCustomersEmitter.emit(customers);
      }
    });
  }

}
