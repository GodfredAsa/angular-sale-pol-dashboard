import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  navElements: any = [
    {name: 'Dashboard', to: '/', iconClass: 'bi bi-border-all'},
    {name: 'Analytics', to: '/', iconClass: 'bi bi-bar-chart-fill',  number: 3},
    {name: 'Shop Analyzer', to: '/', iconClass: 'bi bi-shop-window'},
    {name: 'Sales Report', to: '/' , iconClass:'bi bi-card-checklist'},
    {name: 'Transactions', iconClass :'bi bi-card-list',to: '/'},
  ]

  otherNavElements: any = [
    {name: 'Extensions', to: '/', iconClass: 'bi bi-columns-gap'},
    {name: 'Affiliate Programs', to: '/', iconClass: 'bi bi-files',  number: 3},
    {name: 'Upgrade', to: '/', iconClass: 'bi bi-cpu'},
  ]

  supportNavElements: any = [
    {name: 'Settings', to: '/', iconClass: 'bi bi-gear-wide-connected'},
    {name: 'Help Center', to: '/', iconClass: 'bi bi-headset'}
  ]




}
