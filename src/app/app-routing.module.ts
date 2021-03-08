import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardViewComponent } from '@features/customers/components/card-view/card-view.component';
import {CustomersComponent} from '@features/customers/container/customers.component';




const routes: Routes = [
  {
    path: 'customers',
   
    loadChildren: () => import('src/app/features/customers/customers.module').then(m => m.CustomersModule)
  },
  { path: 'card', loadChildren: () => import('./card/card.module').then(m => m.CardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
