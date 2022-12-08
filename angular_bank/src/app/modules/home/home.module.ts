import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserModule } from "../user/user.module";
import { UserType } from 'src/app/core/models/UserType';
import { UserTypeModule } from '../user-type/user-type.module';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        UserModule,
        UserTypeModule
    ]
})
export class HomeModule { }
