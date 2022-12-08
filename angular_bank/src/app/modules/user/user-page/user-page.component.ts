import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/User';
import { UserType } from 'src/app/core/models/UserType';
import { UserTypeServiceService } from '../../user-type-form/user-type-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  users: User[] = [];

  userTypes: UserType[] = [];

  @Output() userId = new EventEmitter<number>();

  user: User = Object();

  id: number = 0;
  hiddenArrowUp1: string = 'inline-block';
  hiddenArrowDown1: string = 'none';
  hiddenArrowUp2: string = 'inline-block';
  hiddenArrowDown2: string = 'none';
  hiddenArrowUp3: string = 'inline-block';
  hiddenArrowDown3: string = 'none';
  hiddenArrowUp4: string = 'inline-block';
  hiddenArrowDown4: string = 'none';

  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  constructor(private userTypeService: UserTypeServiceService, private userService: UserServiceService, private router: Router, private route: ActivatedRoute){
  }
  
  ngOnInit(): void {
    this.userTypeService.getUserTypes()
    .subscribe(response => this.userTypes=response);
    this.userService.getUsers()
    .subscribe(response => this.users=response);
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(result => this.reloadPage());
    alert('User removed!')
  }

  goToAddEditUser(id?:number){
    if(id != undefined){
      this.id=id;
      this.userService.keepUserId(this.id);
    } 
    this.router.navigate(['/user-form']);
  }

  reloadPage(){
    window.location.reload()
  }

  changeSort(property: string, option: number): void {

    this.showArrows(option);

    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }

    console.log(this.optionSort);
  }

  showArrows(option: number): void {

    switch(option){
      case 1:
        this.hiddenArrowUp1 = (this.hiddenArrowUp1 === 'none') ? 'inline-block' : 'none';
        this.hiddenArrowDown1 = (this.hiddenArrowDown1 === 'none') ? 'inline-block' : 'none';
        break;
      case 2:
        this.hiddenArrowUp2 = (this.hiddenArrowUp2 === 'none') ? 'inline-block' : 'none';
        this.hiddenArrowDown2 = (this.hiddenArrowDown2 === 'none') ? 'inline-block' : 'none';
        break;
      case 3:
        this.hiddenArrowUp3 = (this.hiddenArrowUp3 === 'none') ? 'inline-block' : 'none';
        this.hiddenArrowDown3 = (this.hiddenArrowDown3 === 'none') ? 'inline-block' : 'none';
        break;
      case 4:
        this.hiddenArrowUp4 = (this.hiddenArrowUp4 === 'none') ? 'inline-block' : 'none';
        this.hiddenArrowDown4 = (this.hiddenArrowDown4 === 'none') ? 'inline-block' : 'none';
        break;
    }     
  }

}
