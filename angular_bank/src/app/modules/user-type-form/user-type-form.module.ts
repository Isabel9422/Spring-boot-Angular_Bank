import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTypeFormRoutingModule } from './user-type-form-routing.module';
import { FormsModule } from '@angular/forms';
import { UserTypeFormPageComponent } from './user-type-form-page/user-type-form-page.component';


@NgModule({
  declarations: [
  
    UserTypeFormPageComponent
  ],
  imports: [
    CommonModule,
    UserTypeFormRoutingModule,
    FormsModule
  ]
})
export class UserTypeFormModule { }
