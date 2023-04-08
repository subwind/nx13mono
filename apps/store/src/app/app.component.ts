import { Component } from '@angular/core';
import { exampleProducts } from '@nx13mono/products';

@Component({
  selector: 'nx13mono-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'store';
  products = exampleProducts;
}
