import {Component, OnDestroy, OnInit} from '@angular/core';
import {ICustomersFilter} from '@features/customers/model/ICustomersFilter';
import {CustomersFacadeService} from '@features/customers/Customers-facade.service';
import {ICustomers} from '@features/customers/model/Icustomers';
import {Observable, Subscription} from 'rxjs';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {TranslateService} from '@ngx-translate/core';
import {DialogMessageComponent} from 'shared';

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
  rootName;
  lastUpdUser;

  constructor(public customersFacade: CustomersFacadeService ,
              private toastrService: NbToastrService,
              private translate: TranslateService,
              private dialogService: NbDialogService) { }

  ngOnInit() {
    this.rootName = this.customersFacade.acs.getRootName();
    this.lastUpdUser = this.customersFacade.acs.getUserName();
    this.layoutSingleColumn = false;
    const defaultFilter: ICustomersFilter = {rootName: this.rootName} ;

    //uncomment that only when the load data API is developed!!!!
    //this.customersFacade.loadCustomers(defaultFilter);

    //dynamic column
    this.columns = [{ field: 'col_1', header: this.translate.instant('customers.list.customersCode'), display: 'table-cell', data: false , format: '' },
      { field: 'col_2', header: 'customers.list.customersCol2', display: 'table-cell', data: false , format: '' },
      { field: 'col_3', header: 'customers.list.customersCol3', display: 'table-cell', data: false , format: '' },
      { field: 'col_4', header: 'customers.list.customersCol4', display: 'table-cell', data: false , format: '' }, //none
    ];
  }

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
    this.customersSelected = { id: null, customersCode: null, rootName: null, lastUpdUser: null};
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
    customers.rootName = this.rootName;
    customers.lastUpdUser = this.lastUpdUser;
    this.customersFacade.saveCustomers(customers);
  }

  public updateCustomers(customers: ICustomers){
    this.customersFacade.updateCustomers(customers);
  }

  public search(filter){
    filter.rootName = this.rootName;
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
