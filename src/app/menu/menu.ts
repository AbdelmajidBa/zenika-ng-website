import { Component, computed, inject, input } from '@angular/core';
import { Basket } from '../services/basket';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

   public basketService  = inject(Basket);

  //total = input.required<number>();

  numberOfItems = computed<number>(() => this.basketService.total());
}
