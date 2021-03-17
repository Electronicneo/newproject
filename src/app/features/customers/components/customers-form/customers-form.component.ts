import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ICustomers} from '@features/customers/model/ICustomers';
import {NbDialogService} from '@nebular/theme';
import {Observable} from 'rxjs';
import { AccessCheckerService, DialogMessageComponent } from 'shared';

@Component({
  selector: 'csm-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.scss']
})
export class CustomersFormComponent implements OnInit {

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
  @Output('closeEditForm') closeEditFormEmitter = new EventEmitter<Event>();
  @Output('addCustomers') addCustomersEmitter = new EventEmitter();
  @Output('removeCustomers') removeCustomersEmitter = new EventEmitter();
  @Output('updateCustomers') updateCustomersEmitter = new EventEmitter();

  public isEditMode: boolean;

  customersRow : ICustomers;
  formDisabled: boolean;

  constructor(private dialogService: NbDialogService, private cdr: ChangeDetectorRef) { }

  ngOnInit() { }

  closeEditForm(event) {
     this.closeEditFormEmitter.emit(event);
  }

  addCustomers(event) {
    this.addCustomersEmitter.emit(this.customersRow);
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
}
