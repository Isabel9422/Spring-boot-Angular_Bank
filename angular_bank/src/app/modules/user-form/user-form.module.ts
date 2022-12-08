import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormRoutingModule } from './user-form-routing.module';
import { UserFormPageComponent } from './user-form-page/user-form-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserFormPageComponent
  ],
  imports: [
    CommonModule,
    UserFormRoutingModule,
    FormsModule,
  ],
  exports: [
    UserFormPageComponent
  ]
})
export class UserFormModule { }
