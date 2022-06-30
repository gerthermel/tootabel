import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { HomeComponent } from './home/home.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { SettingsComponent } from './settings/settings.component';
import { WorkersComponent } from './workers/workers.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/modules/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    PermissionsComponent,
    SettingsComponent,
    WorkersComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class SettingsModule { }
