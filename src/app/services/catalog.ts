import { computed, inject, Injectable, signal } from '@angular/core';
import { ProductModel } from '../product/product.types';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Catalog {
  
  private httpClient = inject(HttpClient);
  private _products = signal<ProductModel[]>([
    // {
    //   "id": "welsch",
    //   "title": "Coding the welsch",
    //   "description": "Tee-shirt col rond - Homme",
    //   "photo": "/assets/coding-the-welsch.jpg",
    //   "price": 20,
    //   "stock": 5
    // },
    // {
    //   "id": "world",
    //   "title": "Coding the world",
    //   "description": "Tee-shirt col rond - Homme",
    //   "photo": "/assets/coding-the-world.jpg",
    //   "price": 18,
    //   "stock": 1
    // },
    // {
    //   "id": "vador",
    //   "title": "Duck Vador",
    //   "description": "Tee-shirt col rond - Femme",
    //   "photo": "/assets/coding-the-stars.jpg",
    //   "price": 21,
    //   "stock": 2
    // },
    // {
    //   "id": "snow",
    //   "title": "Coding the snow",
    //   "description": "Tee-shirt col rond - Femme",
    //   "photo": "/assets/coding-the-snow.jpg",
    //   "price": 19,
    //   "stock": 2
    // }
  ]) ;

  products = this._products.asReadonly(); 

  hasProductsInStock = computed(() => this.products().some(product => product.stock > 0));

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

  constructor() { }
}
