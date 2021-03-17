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
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomersFacadeService } from '@features/customers/Customers-facade.service';
import { ICustomers } from '@features/customers/model/ICustomers';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { Observable, Subscription } from 'rxjs';
import { AccessCheckerService, DialogMessageComponent } from 'shared';
import { CardViewService } from 'src/app/card-view.service';



@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  @ViewChild('labelImport', { static: false }) labelImport: ElementRef;
  @Input("customer") customer: ICustomers={   id:'',name:'',streetNumber:'', address:'',city:'',country:'',};
  @Input('row') set customers(value: ICustomers) {
    //value.id !== null ? this.isEditMode = true : this.isEditMode = false;
    if (value.id !== null) {
      this.isEditMode = true;
      this.formDisabled = true;
    } else {
      this.isEditMode = false;
      this.formDisabled = false;
    }
    this.customersRow = { ...value };
  }
  @Output('saveCustomers') saveCustomersFormEmitter = new EventEmitter<Event>();
  @Output('closeEditForm') closeEditFormEmitter = new EventEmitter<Event>();
  @Output('addCustomers') addCustomersEmitter = new EventEmitter();
  @Output('removeCustomers') removeCustomersEmitter = new EventEmitter();
  @Output('updateCustomers') updateCustomersEmitter = new EventEmitter();

  public isEditMode: boolean;
  public isUpdate: boolean;
  customersRow: ICustomers;
  formDisabled: boolean;
  cardForm: FormGroup;
  customersCodeCtrl: FormControl;
  clickEventSub:Subscription;
  
  constructor(private dialogService: NbDialogService, private cdr: ChangeDetectorRef,
    //protected dialogRef: NbDialogRef<CardFormComponent>,
    protected fb: FormBuilder,
    public customersFacade: CustomersFacadeService,
    public cardViewService:CardViewService) { 
      // this.clickEventSub=this.cardViewService.getClickEvent().subscribe((data)=>{
      //   this.showEdit(data);
      // })
    }

  ngOnInit() {
    this.buildGeneralForm(this.fb);
    
    if(this.customer && this.customer.id==null ){
      this.isUpdate=false;
    }else{
      this.isUpdate=true;
      this.showEdit();
    }
  }
  buildGeneralForm(fb: FormBuilder) {
    // this.customersCodeCtrl = fb.control( 'name, );
    this.cardForm = fb.group({
      //id: new FormControl(''),
      name: new FormControl(this.customer.name,Validators.required),
      address: new FormControl(this.customer.address,Validators.required),
      streetNumber: new FormControl(this.customer.streetNumber,Validators.required),
      city: new FormControl(this.customer.city,Validators.required),
      country: new FormControl(this.customer.country,Validators.required),
    });
  }
  showEdit(){
    console.log(this.customer);
    // this.cardForm.setValue(
    //    {
    //    //id:this.customer.id,
    //    name:this.customer.name,
    //    address:this.customer.address,
    //    streetNumber:this.customer.streetNumber,
    //    city:this.customer.city,
    //    country:this.customer.country
    // }
    // );
  }

  addCustomers() {
    const customer: ICustomers = { ...this.customer, ...this.cardForm.value };    
     this.addCustomersEmitter.emit(customer);
    //this.addCustomersEmitter.emit(this.cardForm.value);
  }


  updateCustomers(event) {
    this.updateCustomersEmitter.emit(this.cardForm.value);
  }

  resetForm() {
    this.cardForm.reset();
  }

  enableEditForm(event) {
    this.isEditMode = false;
  }

}
