 import {SharedModule as sharedLibModule} from 'shared';import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './container/customers.component';
import { CustomersFormComponent } from './components/customers-form/customers-form.component';
import { CustomersFilterComponent } from './components/customers-filter/customers-filter.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromCustomers from './store/customers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffects } from './store/customers.effects';
import { AngularSplitModule } from 'angular-split';
import { NbAccordionComponent, NbAccordionModule, NbCardModule, NbIconModule, NbInputModule, NbSpinnerModule, NbTooltipModule } from '@nebular/theme';
import { TableModule } from 'primeng/table';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule } from '@nebular/theme';



@NgModule({
  declarations: [CustomersComponent, CustomersFormComponent, CustomersFilterComponent, CustomersListComponent],
  imports: [
    sharedLibModule,CommonModule,
    CustomersRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(fromCustomers.customersFeatureKey, fromCustomers.reducer),
    EffectsModule.forFeature([CustomersEffects]),
    AngularSplitModule,
    NbCardModule,
    NbSpinnerModule,
    TableModule,
    TranslateModule, 
    NbAccordionModule,
    ReactiveFormsModule,
    FormsModule,
    NbIconModule,
    NbTooltipModule, 
    NbInputModule,
    NbButtonModule 
    
  ]
})
export class CustomersModule { }
