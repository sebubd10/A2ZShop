import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MixedComponent } from './mixed/mixed.component';
import { HomeComponent } from './home/home.component';
import { CustomerLayoutComponent } from './common/layout/customer/customer.layout';

const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  {path:'mixed', component:MixedComponent},
  {path:'customer', component:CustomerLayoutComponent,
    children:[
      { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
      { path: 'items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
