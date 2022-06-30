import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './dashboard/login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'registreeri', component: SignupComponent },
  { path: 'sisene', component: LoginComponent },
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: '**', redirectTo:'error/404', data:{title: '404'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//test
