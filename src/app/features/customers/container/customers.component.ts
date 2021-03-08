import {Component, OnDestroy, OnInit} from '@angular/core';
import {ICustomersFilter} from '@features/customers/model/ICustomersFilter';
import {CustomersFacadeService} from '@features/customers/Customers-facade.service';
import {ICustomers} from '@features/customers/model/Icustomers';
import {Observable, Subscription} from 'rxjs';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {TranslateService} from '@ngx-translate/core';
import {DialogMessageComponent} from 'shared';
import { CardViewComponent } from '../components/card-view/card-view.component';
import { CustomersListComponent } from '../components/customers-list/customers-list.component';
import { CustomersFormComponent } from '../components/customers-form/customers-form.component';
import { CardFormComponent } from '../components/card-form/card-form.component';

@Component({
  selector: 'csm-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {
  customersSelected: ICustomers;
  columns: {field: string, header: string, display: string, data: boolean, format: string} [];
  layoutSingleColumn: boolean;
  successState$ = this.customersFacade.customersSuccessState$;
  isLoadingState$ = this.customersFacade.customersIsLoadingState$;
  name;
  lastUpdUser;
  viewCard:boolean=false;
  viewTable:boolean=true;
  constructor(public customersFacade: CustomersFacadeService ,
              private toastrService: NbToastrService,
              private translate: TranslateService,
              private dialogService: NbDialogService) { }

  ngOnInit() {
    this.layoutSingleColumn = false;
    const defaultFilter: ICustomersFilter = {name: ""} ;

    //uncomment that only when the load data API is developed!!!!
    this.customersFacade.loadCustomers(defaultFilter);

    //dynamic column
    this.columns = [{ field: 'name', header: this.translate.instant('Name'), display: 'table-cell', data: false , format: '' },
      { field: 'address', header: 'Address', display: 'table-cell', data: false , format: '' },
      { field: 'streetNumber', header: 'Street Number', display: 'table-cell', data: false , format: '' },
      { field: 'city', header: 'City', display: 'table-cell', data: false , format: '' },
      { field: 'country', header: 'Country', display: 'table-cell', data: false , format: '' }, //none
    ];
  }
   public viewCardss(){
    this.viewCard=true;
    this.viewTable=false;
  }
  public viewTablee(){
    this.viewCard=false;
    this.viewTable=true;
  }
  open() {
    this.dialogService.open(CardFormComponent)
      // .onClose.subscribe(name => name && this.names.push(name));
  }
  tabs: any[] = [
    {
      title: 'Users',
      icon: 'person',
      route: './',
    },
    {
      title: 'Card View',
      icon: 'paper-plane-outline',
      responsive: true,
      route: [ './card' ],
    },

  ];
  ngOnDestroy(): void {
    this.setSuccessState(true);
   }

  public setCurrentCustomers(event) {
    // when the row is selected
    this.customersSelected = event;
    //open form
    this.setSuccessState(false);
  }

  public addCustomers(event){
    this.customersSelected = { id: null, name: null, address: null, streetNumber: null ,city:null , country:null};
    this.setSuccessState(false);
  }

  public changeLayout(event) {
    this.layoutSingleColumn = !this.layoutSingleColumn;
    if(this.layoutSingleColumn) {
      this.columns.forEach((value, index) => index === 0 ? value.display='table-cell': value.display='none');
    }else{
      this.columns.forEach((value) => value.display='table-cell');
    }
  }

  public closeFormCard(formDisabled) {
     if (formDisabled) {
          this.setSuccessState(true);
     }else {
              this.dialogService.open(DialogMessageComponent, {
                      context: {isConfirmationMode: true, title: 'crudForm.dialogCloseForm.title', message: 'crudForm.dialogCloseForm.message'},
                    }).onClose.subscribe(isConfirmed => {
                                                      if (isConfirmed) {
                                                      //closeForm
                                                      this.setSuccessState(true);
                                                      if(this.layoutSingleColumn){
                                                          this.changeLayout(null);
                                                        }
                                                      }
                                                    });
            }
      }


  public removeCustomers(event) {
    this.customersFacade.removeCustomers(this.customersSelected);
  }

  public saveCustomers(customers: ICustomers){
  
    this.customersFacade.saveCustomers(customers);
  }

  public updateCustomers(customers: ICustomers){
    this.customersFacade.updateCustomers(customers);
  }

  public search(filter){
    this.customersFacade.loadCustomers(filter);
  }

   public setSuccessState(flag: boolean) {
     this.customersFacade.setSuccessState(flag);
    }

   public helpPage($event) {
    this.dialogService.open(DialogMessageComponent, { context: { isConfirmationMode: false, title: this.translate.instant('customers.help.pageTitle'), message: this.translate.instant('customers.help.pageMessage') },
     })
   }

   public helpTable($event) {
     this.dialogService.open(DialogMessageComponent, { context: { isConfirmationMode: false, title: this.translate.instant('customers.help.tableTitle'), message: this.translate.instant('customers.help.tableMessage') },
      })
   }
}
