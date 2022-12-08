import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTypePageComponent } from './user-type-page/user-type-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserTypePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTypeRoutingModule { }
