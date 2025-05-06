import { Component } from '@angular/core';

@Component({
  selector: 'profile-drop-card',
  templateUrl: './profile-drop-card.component.html',
  styleUrls: ['./profile-drop-card.component.css']
})
export class ProfileDropCardComponent {

  isDropdownOpened: boolean = false;


  profileNavElements = [
    {name: "Dashboard", icon: 'bi bi-columns-gap', to: "/"},
    {name: "Settings", icon: 'bi bi-gear', to: "/"},
    {name: "Analytics",icon: 'bi bi-bar-chart-fill', to: "/"},
    {name: "Signout", icon: 'bi bi-arrow-bar-right', to: "/"},
  ]

}
