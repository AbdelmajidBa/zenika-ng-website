import { Component, input, output } from '@angular/core';
import { ProductModel } from './product.types';
import { CurrencyPipe, NgClass, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [NgClass, UpperCasePipe, CurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone: true
})
export class Product {

  
  product = input.required<ProductModel>();

  addToBasket = output<ProductModel>();
   
  get isLastChance(): boolean {
    return this.product().stock == 1;
  };
 
  protected onClick() {
    
    this.addToBasket.emit(this.product());
  }
  
}
