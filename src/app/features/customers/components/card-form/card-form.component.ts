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
  
  @Input("customer") customer: ICustomers={   id:'',name:'',streetNumber:'', address:'',city:'',country:'',};
  @Output('addCustomers') addCustomersEmitter = new EventEmitter();
  @Output('removeCustomers') removeCustomersEmitter = new EventEmitter();
  @Output('updateCustomers') updateCustomersEmitter = new EventEmitter();
 


  public isUpdate: boolean;
  customersRow: ICustomers;
  cardForm: FormGroup;
  //customersCodeCtrl: FormControl;
  //clickEventSub:Subscription;
  
  constructor(private dialogService: NbDialogService, private cdr: ChangeDetectorRef,
    //protected dialogRef: NbDialogRef<CardFormComponent>,
    protected fb: FormBuilder,
    public cardViewService:CardViewService) { 
      // this.clickEventSub=this.cardViewService.getClickEvent().subscribe((data)=>{
      //   this.showEdit(data);
      // })
    }

  ngOnInit() {
    this.buildGeneralForm(this.fb);
    
    if( !this.customer ){
      this.isUpdate=false;
     console.log("add"); 
    }else {
      this.isUpdate=true;
      this.showEdit();
      console.log("update"); 
    }
  }
  buildGeneralForm(fb: FormBuilder) {

    this.cardForm = fb.group({
      id: new FormControl(''),
      name: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      streetNumber: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      country: new FormControl('',Validators.required),
    });
  }
  showEdit(){
    console.log(this.customer);
    this.cardForm.patchValue(
       {
       id:this.customer.id,
       name:this.customer.name,
       address:this.customer.address,
       streetNumber:this.customer.streetNumber,
       city:this.customer.city,
       country:this.customer.country
    }
    );
  }

  addCustomers(event) {
    //const customer: ICustomers = { ...this.customer, ...this.cardForm.value };    
   //  this.addCustomersEmitter.emit(customer);
   this.addCustomersEmitter.emit(this.cardForm.value);
  }


  updateCustomers(event) {
    this.updateCustomersEmitter.emit(this.cardForm.value);
  }

  resetForm() {
    this.cardForm.reset();
  }

  // enableEditForm(event) {
  //   this.isEditMode = false;
  // }

}
