import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, HomepageRoutingModule, MaterialModule],
})
export class HomepageModule {}
