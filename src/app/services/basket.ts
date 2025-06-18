import { computed, Injectable, signal } from '@angular/core';
import { BasketItem } from './basket.item';

@Injectable({
  providedIn: 'root'
})
export class Basket {

  private _items = signal<BasketItem[]>([]);
  
  items = this._items.asReadonly();
  
  //total = computed<number>(() => this.items.length);
  
  total = computed<number>(() => this._items().reduce((total, item) => total + item.price, 0));
  
  addItem(item: BasketItem): void{ 

    // this._items.update(items =>  { 
    //   items.push(item);
    //   return items;
    // } );  

    this._items.update(items => [...items, item]);  
  }
  constructor() { }
}
