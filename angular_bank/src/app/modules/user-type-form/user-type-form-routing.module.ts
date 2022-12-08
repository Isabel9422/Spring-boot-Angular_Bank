import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTypeFormPageComponent } from './user-type-form-page/user-type-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserTypeFormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTypeFormRoutingModule { }
