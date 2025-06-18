import { computed, inject, Injectable, signal } from '@angular/core';
import { BasketItem } from './basket.item';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Basket {

  private httpClient = inject(HttpClient);
  private _items = signal<BasketItem[]>([]);
  
  items = this._items.asReadonly();
  
  //total = computed<number>(() => this.items.length);
  
  total = computed<number>(() => this._items().reduce((total, item) => total + item.price, 0));
  
  addItem(item: BasketItem): void{ 

    this._items.update(items => [...items, item]);  
  }


  addItemToSrver(item: BasketItem): Observable<BasketItem>{  
     return this.httpClient
      .post<BasketItem>('http://localhost:8080/api/basket', { productId: item.id });
  }

  fetchBasket(): Observable<BasketItem[]> { 
    
    return this.httpClient
      .get<BasketItem[]>('http://localhost:8080/api/basket')
      .pipe(tap((baskets) => this._items.set(baskets)));

  }

  constructor() { }
}
