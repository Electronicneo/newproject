import {CustomersComponent} from '@features/customers/container/customers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardViewComponent } from './components/card-view/card-view.component';


const routes: Routes = [{path: '', component: CustomersComponent},
 {path: 'customers', component: CustomersComponent},
{path: 'card', component: CardViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
