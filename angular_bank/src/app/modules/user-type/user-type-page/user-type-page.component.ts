import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserType } from 'src/app/core/models/UserType';
import { UserTypeServiceService } from '../../user-type-form/user-type-service.service';
import { UserServiceService } from '../../user/user-service.service';

@Component({
  selector: 'app-user-type-page',
  templateUrl: './user-type-page.component.html',
  styleUrls: ['./user-type-page.component.css']
})
export class UserTypePageComponent {

  userTypes: UserType[] = [];

  hiddenArrowUp1: string = 'inline-block';
  hiddenArrowDown1: string = 'none';

  id:number = 0;
  
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  constructor(private userTypeService: UserTypeServiceService, private userService: UserServiceService, private router: Router, private route: ActivatedRoute){
  }
  
  ngOnInit(): void {
    this.userTypeService.getUserTypes()
    .subscribe(response => this.userTypes=response);
  }

  deleteUser(id: number): void {
    this.userTypeService.deleteUserType(id).subscribe(result => this.reloadPage());
    alert('UserType removed!')
  }

  goToAddUserType(id?: number){
    if(id != undefined){
      this.id=id;
      this.userTypeService.keepUserTypeId(this.id);
    } 
    this.router.navigate(['/user-type-form'])
  }

  reloadPage(){
    window.location.reload()
  }

  keepUserTypeId(id: number){
    this.id = 0;
    this.id = id;
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
}
  }

}
