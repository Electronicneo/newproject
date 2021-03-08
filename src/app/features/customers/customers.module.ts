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
import { NbAccordionComponent, NbAccordionModule, NbCardModule, NbIconModule, NbInputModule, NbRouteTabsetModule, NbSpinnerModule, NbTabsetModule, NbTooltipModule } from '@nebular/theme';
import { TableModule } from 'primeng/table';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule } from '@nebular/theme';
import { CardViewComponent } from './components/card-view/card-view.component';
import { CardFormComponent } from './components/card-form/card-form.component';



@NgModule({
  declarations: [CustomersComponent, CustomersFormComponent, CustomersFilterComponent, CustomersListComponent, CardViewComponent, CardFormComponent],
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
    NbTabsetModule,
    NbRouteTabsetModule,
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
