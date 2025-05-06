import { Component } from '@angular/core';
import { NavigationModel } from '../model/nav/nav-model';
import { navElements, otherNavEle, supportNavEle } from '../model/nav/nav-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  navElements: NavigationModel[] = navElements
  otherNavElements: NavigationModel[] = otherNavEle
  supportNavElements: NavigationModel[] = supportNavEle
}
