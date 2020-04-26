import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDAcW8J2GxZ4gNIS9dYcS3qCm6bwWzS-1Y',
      libraries: ['places'],
    }),
  ],
})
export class HomeModule {}
