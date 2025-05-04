import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-of-elements',
  templateUrl: './list-of-elements.component.html',
  styleUrls: ['./list-of-elements.component.css']
})
export class ListOfElementsComponent {

  @Input() tableHeaders: string[] = []
  // productName, color, Category, price
  @Input() rowElements: any = []
  @Input() onClick?: () => void;



  handleClick() {
    if(this.onClick) {
      this.onClick();
    }
  }




}
