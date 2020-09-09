import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { SigninComponent } from '../signin/signin/signin.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children: [
      {
          path: '',
          component: HomeComponent,
          canActivate: [AuthGuard]
      },            
      { 
          path: 'sisene', 
          component: SigninComponent 
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
