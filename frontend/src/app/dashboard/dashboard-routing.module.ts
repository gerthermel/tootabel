import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyComponent } from './company/company.component';
import { CompanyResolver } from '../shared/guards/company-resolver.service';


const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children: [
      { 
        path: 'sisene', 
        component: LoginComponent 
      },
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },   
      {
        path: 'firma/:id',
        component: CompanyComponent,
        canActivate: [AuthGuard],
        resolve: {
          resolver: CompanyResolver
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
