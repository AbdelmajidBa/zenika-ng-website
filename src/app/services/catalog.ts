import { computed, inject, Injectable, signal } from '@angular/core';
import { ProductModel } from '../product/product.types';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Catalog {
  
  private httpClient = inject(HttpClient);
  private _products = signal<ProductModel[]>([]) ;

  products = this._products.asReadonly(); 

  hasProductsInStock = computed<boolean>(() => (this._products() ?? []).some(({ stock }) => stock > 0));

   fetchProducts(): Observable<ProductModel[]> {
    return this.httpClient
      .get<ProductModel[]>('http://localhost:8080/api/products')
      .pipe(tap((products) => this._products.set(products)));
  }
 
  decreaseStock(productId: string): void { 

     this._products.update((products) =>
      products.map((product) => {
        if (product.id === productId && product.stock > 0) {
          return { ...product, stock: product.stock - 1 };
        }
        return product;
      }),
    );

  }

}
