import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../homepage/dashboard/home/home.module').then(
            (mod) => mod.HomeModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../homepage/dashboard/profile/profile.module').then(
            (mod) => mod.ProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
