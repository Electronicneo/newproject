import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {ICustomersFilter} from '@features/customers/model/ICustomersFilter';

@Component({
  selector: 'csm-customers-filter',
  templateUrl: './customers-filter.component.html',
  styleUrls: ['./customers-filter.component.scss']
})
export class CustomersFilterComponent implements OnInit {

  @Output('searchCustomers') searchCustomersEmitter = new EventEmitter<ICustomersFilter>();

  customersFilterForm: FormGroup;
  customersCodeCtrl: FormControl;

  constructor(protected fb: FormBuilder) { }

  ngOnInit() {
    this.buildGeneralForm(this.fb);
  }

  buildGeneralForm(fb: FormBuilder) {
   // this.customersCodeCtrl = fb.control( 'name, );
    this.customersFilterForm = fb.group({
      name: this.customersCodeCtrl,
    });
  }

  public search(){
    const customersCode = this.customersFilterForm.get('name').value;
    const filter: ICustomersFilter = {name: customersCode};
    this.searchCustomersEmitter.emit(filter);
  }

  public resetForm(){
      this.customersFilterForm.get('name').setValue('');
  }
}


