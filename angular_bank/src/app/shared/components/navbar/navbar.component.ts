import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  mainMenu: { defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'User List',
        router: ['/', 'home']
      },
      {
        name: 'UserType List',
        router: ['/', 'user-type']
      }
    ]
  }


}
