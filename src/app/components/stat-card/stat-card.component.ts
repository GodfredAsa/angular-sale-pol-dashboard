import { Component, Input } from '@angular/core';

@Component({
  selector: 'stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent {
  @Input() title: string = '';
  @Input() amount: Number = 0.00;
  @Input() rate: number | string;
  @Input() startDate: string = '';
  @Input() endDate: string = '';
  @Input() isProgress: boolean =  false;


}
