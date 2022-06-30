import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyResolver } from 'src/app/shared/guards/company-resolver.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyComponent } from './company.component';
import { IndexComponent } from './index/index.component';
import { MenuResolver } from 'src/app/shared/guards/menu-resolver.service';
import { UserResolver } from 'src/app/shared/guards/user-resolver.service';

const routes: Routes = [
    {
      path: '',
      component: CompanyComponent,
      children: [
        { 
          path: '', 
          component: DashboardComponent,
        },
        { 
          path: ':id', 
          resolve: [UserResolver],
          component: IndexComponent,

        },
        { 
          path: 'seaded', 
          loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) 
        },
      ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
