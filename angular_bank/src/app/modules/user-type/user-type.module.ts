import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTypeRoutingModule } from './user-type-routing.module';
import { UserTypePageComponent } from './user-type-page/user-type-page.component';
import { OrderListPipe } from './pipe/order-list.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserTypePageComponent,
    OrderListPipe
  ],
  imports: [
    CommonModule,
    UserTypeRoutingModule,
    FormsModule
  ],
  exports: [
    UserTypePageComponent
  ]
})
export class UserTypeModule { 

}
