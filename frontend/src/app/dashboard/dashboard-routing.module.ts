import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyComponent } from './company/company.component';
import { CompanyResolver } from '../shared/guards/company-resolver.service';
import { MenuResolver } from '../shared/guards/menu-resolver.service';
import { SettingsComponent } from './settings/settings.component';
import { PermissionsResolver } from '../shared/guards/permissions-resolver.service';
import { PermissionsGuard } from '../shared/guards/permissions.guard';


const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    canActivate: [PermissionsGuard],
    children: [
      { 
        path: 'sisene', 
        component: LoginComponent 
      },
      { 
        path: 'kasutaja/seaded', 
        component: SettingsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'firma/:id',
        canActivate: [AuthGuard],
        resolve:[CompanyResolver],
        loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) 
      },
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        resolve: {
        },
      },    
  ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
