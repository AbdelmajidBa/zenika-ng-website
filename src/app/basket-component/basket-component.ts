import { Component, inject } from '@angular/core';
import { Basket } from '../services/basket';

@Component({
  selector: 'app-basket-component',
  imports: [],
  templateUrl: './basket-component.html',
  styleUrl: './basket-component.css'
})
export class BasketComponent {
  
  public basketService  = inject(Basket);
}
