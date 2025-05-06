import { Component } from '@angular/core';
import { productData } from './components/model/products/products.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sales-dashboard';
   products = productData
}
