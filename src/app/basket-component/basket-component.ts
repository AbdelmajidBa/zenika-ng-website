import { Component, inject } from '@angular/core';
import { Basket } from '../services/basket';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-basket-component',
  imports: [CurrencyPipe],
  templateUrl: './basket-component.html',
  styleUrl: './basket-component.css'
})
export class BasketComponent {
  
  public basketService  = inject(Basket);

  protected items = this.basketService.items;

  protected total = this.basketService.total;
  
}
