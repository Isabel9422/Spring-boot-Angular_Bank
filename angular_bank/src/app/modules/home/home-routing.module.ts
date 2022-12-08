import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren:() => import(`../user/user.module`).then(m => m.UserModule)
  },
  {
    path: 'user-form',
    loadChildren:() => import(`../user-form/user-form.module`).then(m => m.UserFormModule)
  },
  {
    path: 'user-type-form',
    loadChildren:() => import(`../user-type-form/user-type-form.module`).then(m => m.UserTypeFormModule)
  },
  {
    path: 'user-type',
    loadChildren:() => import(`../user-type/user-type.module`).then(m => m.UserTypeModule)
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
