import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CustomersFacadeService } from '@features/customers/Customers-facade.service';
import {ICustomers} from '@features/customers/model/ICustomers';
import {NbDialogService,NbDialogRef} from '@nebular/theme';
import {Observable} from 'rxjs';
import { AccessCheckerService, DialogMessageComponent } from 'shared';


@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  @ViewChild('labelImport', { static: false }) labelImport: ElementRef;
  @Input('row')
  set customers(value: ICustomers) {
    //value.id !== null ? this.isEditMode = true : this.isEditMode = false;
     if(value.id !== null){
          this.isEditMode = true;
          this.formDisabled = true;
        }else{
          this.isEditMode = false;
          this.formDisabled = false;
        }
    this.customersRow = {...value};
  }
  @Output('saveCustomers') saveCustomersFormEmitter = new EventEmitter<Event>();
  @Output('closeEditForm') closeEditFormEmitter = new EventEmitter<Event>();
  @Output('addCustomers') addCustomersEmitter = new EventEmitter();
  @Output('removeCustomers') removeCustomersEmitter = new EventEmitter();
  @Output('updateCustomers') updateCustomersEmitter = new EventEmitter();

  public isEditMode: boolean;
 
  customersRow : ICustomers;
  formDisabled: boolean;
  constructor(private dialogService: NbDialogService, private cdr: ChangeDetectorRef,
    protected dialogRef: NbDialogRef<CardFormComponent>,
    public customersFacade: CustomersFacadeService ,) { }

  ngOnInit() { }

  closeEditForm(event) {
     this.closeEditFormEmitter.emit(event);
  }

  addCustomers(event) {
    this.addCustomersEmitter.emit(this.customersRow);
  }
  close() {
    this.dialogRef.close();// set false while you need open your model popup
   // do your more code
}

  removeCustomers() {
    this.dialogService.open(DialogMessageComponent, { context: { isConfirmationMode: true,
                                                                 title: 'deleteConfirmationDialog.title',
                                                                 message: 'deleteConfirmationDialog.message' }}).onClose.subscribe(isConfimrmed => {
      if (isConfimrmed) {
        this.removeCustomersEmitter.emit();
      }
    });
  }

  updateCustomers() {
    this.updateCustomersEmitter.emit(this.customersRow);
  }

  resetForm() {
    //this.customersForm.reset();
  }

  enableEditForm(event){
    this.isEditMode = false;
  }
  public saveCustomers(customers: ICustomers){
  
    this.customersFacade.saveCustomers(customers);
  }
}
