import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

@NgModule({
  declarations: [DashboardComponent, HomeComponent, ProfileComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MaterialModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDAcW8J2GxZ4gNIS9dYcS3qCm6bwWzS-1Y',
      libraries: ['places'],
    }),
  ],
})
export class HomepageModule {}
