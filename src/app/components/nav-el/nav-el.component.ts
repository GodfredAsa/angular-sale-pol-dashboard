import { Component, Input } from '@angular/core';
import { NavigationModel } from '../model/nav/nav-model';

@Component({
  selector: 'nav-el',
  templateUrl: './nav-el.component.html',
  styleUrls: ['./nav-el.component.css']
})
export class NavElComponent {

  @Input() mainHeader: string = ''
  // icon, name, to, notification number
  @Input() navElements: NavigationModel[] = []
  @Input() iconClass: string = ''





}
