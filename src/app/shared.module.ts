import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MixedComponent } from './mixed/mixed.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CustomerLayoutComponent } from './common/layout/customer/customer.layout';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CustomerLayoutComponent,
    MixedComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    CustomerLayoutComponent,
    CommonModule
  ],
  providers: [],
  bootstrap: [CustomerLayoutComponent]
})
export class SharedModule {
  static forRoot():ModuleWithProviders<SharedModule>{
     return {
       ngModule:SharedModule,
       providers:[]
     }
  }
}
