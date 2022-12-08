import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserType } from 'src/app/core/models/UserType';
import { UserServiceService } from '../../user/user-service.service';
import { UserTypeServiceService } from '../user-type-service.service';

@Component({
  selector: 'app-user-type-form-page',
  templateUrl: './user-type-form-page.component.html',
  styleUrls: ['./user-type-form-page.component.css']
})
export class UserTypeFormPageComponent {

  userType: UserType = Object();

  oldUserType: UserType = Object();

  id: number = 0;
  type: string = "";

  constructor(private userTypeService: UserTypeServiceService, private userService: UserServiceService, private router: Router, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.id=this.userTypeService.getUserTypeId();
    if(this.id!==0){
      this.userTypeService.getUserType(this.id).subscribe(e =>{
        this.oldUserType = e;
      });
    }
  }

  editAddUserType(){
    if(this.id != 0){
      this.userTypeService
      .editUserType(this.id,this.userType)
      .subscribe(result => this.goToUserTypeList());
      alert('UserType edited!')

    }else{
    this.userTypeService
    .addUserType(this.userType)
    .subscribe(result => this.goToUserTypeList());
    alert('UserType has been created');
  }
  }

  goToUserTypeList(){
    this.router.navigate(['/user-type']);
  }



}
