import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentWelcomePagePageRoutingModule } from './student-welcome-page-routing.module';

import { StudentWelcomePagePage } from './student-welcome-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentWelcomePagePageRoutingModule
  ],
  declarations: [StudentWelcomePagePage]
})
export class StudentWelcomePagePageModule {}
