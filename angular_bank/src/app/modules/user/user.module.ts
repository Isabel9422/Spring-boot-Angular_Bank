import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './user-page/user-page.component';
import { OrderListPipe } from './pipe/order-list.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserPageComponent,
    OrderListPipe,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
  ],
  exports: [
    UserPageComponent
  ]
})
export class UserModule { }
