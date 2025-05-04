import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sales-dashboard';

   products = [
    {
      productName: "Apple MacBook Pro 17\"",
      color: "Silver",
      category: "Laptop",
      price: 2999
    },
    {
      productName: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: 1999
    },
    {
      productName: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: 99
    },
    {
      productName: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: 99
    }
  ];



}
