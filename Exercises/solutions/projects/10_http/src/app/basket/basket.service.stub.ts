import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BasketService } from './basket.service';
import { BasketItem } from './basket.types';

@Injectable()
export class BasketStubService implements Partial<BasketService> {
  items = signal<BasketItem[]>([]);

  total = signal(0);

  fetchBasket(): Observable<BasketItem[]> {
    return of(this.items());
  }

  addItem(productId: string): Observable<BasketItem> {
    return of({ id: productId, title: '', price: 0 });
  }
}
