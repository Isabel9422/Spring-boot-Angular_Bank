import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserType } from 'src/app/core/models/UserType';
import { User } from 'src/app/core/models/User';
import { UserServiceService } from '../../user/user-service.service';
import { UserTypeServiceService } from '../../user-type-form/user-type-service.service';

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.css']
})
export class UserFormPageComponent{

  users: User[] = [];

  user: User = Object();
  oldUser: User = Object();

  userType: UserType = Object();

  userId: number = 0;

  userTypes: UserType[] = [];

  constructor(private userService: UserServiceService, private userTypeService: UserTypeServiceService, private router: Router, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.userTypeService.getUserTypes()
    .subscribe(response => this.userTypes=response);
    this.userId=this.userService.getUserId();
    if(this.userId!==0){
      this.userService.getUser(this.userId).subscribe(e =>
        this.oldUser = e);
    }
    this.oldUser.userType = this.userType;
  }

  onSubmit(){

    if(this.userId != 0){
      this.userType != null ? this.user.userType = this.userType : this.user.userType = this.oldUser.userType;
      this.userService
      .editUser(this.userId,this.user)
      .subscribe(result => this.gotoHome());
      alert('User edited!')

    }else{
    this.user.userType = this.userType;
    this.userService
    .addUser(this.user)
    .subscribe(result => this.gotoHome());
    alert('User created!')}
  }

  gotoHome(){
    this.router.navigate(['/home'])
  }

}
