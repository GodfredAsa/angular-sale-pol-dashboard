import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-el',
  templateUrl: './nav-el.component.html',
  styleUrls: ['./nav-el.component.css']
})
export class NavElComponent {

  @Input() mainHeader: string = ''
  // icon, name, to, notification number
  @Input() navElements: any[] = []
  @Input() iconClass: string = ''





}
