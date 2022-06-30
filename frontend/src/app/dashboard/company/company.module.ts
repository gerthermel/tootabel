import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    IndexComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
  ]
})
export class CompanyModule { }
