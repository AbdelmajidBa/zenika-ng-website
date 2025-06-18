// Note: do not use `{ providedIn: "root" }` metadata

import { computed, Injectable, signal } from "@angular/core";
import { BasketItem } from "./basket.item";
import { Basket } from "./basket";

// because the stub will be provided manually in our tests.
@Injectable()
export class BasketStubService implements Partial<Basket> {
  
  items = signal<BasketItem[]>([]);
  
  total = computed<number>(() => this.items().reduce((total, item) => total + item.price, 0));
  
  addItem(item: BasketItem): void {
    this.items.update((items) => [...items, item]);
  }

  
}