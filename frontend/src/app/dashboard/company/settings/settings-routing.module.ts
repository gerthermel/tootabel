import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { CompanyPermissionsResolver } from 'src/app/shared/guards/companyPermissions-resolver.service';
import { HomeComponent } from './home/home.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { SettingsComponent } from './settings/settings.component';
import { WorkersComponent } from './workers/workers.component';

const routes: Routes = [
  {
    path:'',
    component:SettingsComponent,
    children: [
      { 
        path: '', 
        component: HomeComponent 
      },
      { 
        path: 'permissions', 
        resolve:[CompanyPermissionsResolver],
        component: PermissionsComponent 
      },
      { 
        path: 'toolised', 
        component: WorkersComponent 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
