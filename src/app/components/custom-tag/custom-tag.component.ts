import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-tag',
  templateUrl: './custom-tag.component.html',
  styleUrls: ['./custom-tag.component.css']
})
export class CustomTagComponent {
  @Input() name: string | number;
  @Input() cssClasses: string;


}
