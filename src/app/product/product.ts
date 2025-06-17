import { Component, input, output } from '@angular/core';
import { ProductModel } from './product.types';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone: true
})
export class Product {

  
  product = input.required<ProductModel>();

  addToBasket = output<ProductModel>();
 
  protected onClick() {
    
    this.addToBasket.emit(this.product());
  }
  
}
