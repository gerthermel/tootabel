import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/modules/shared.module';
import { MyCompaniesComponent } from './left-menu/my-companies/my-companies.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { CompanyComponent } from './company/company.component';


@NgModule({
  declarations: [
    HomeComponent, 
    LoginComponent, 
    DashboardComponent, 
    MyCompaniesComponent, 
    LeftMenuComponent, 
    CompanyComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
