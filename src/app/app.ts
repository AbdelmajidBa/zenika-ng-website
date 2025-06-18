import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Menu } from "./menu/menu";
import { Product } from "./product/product";
import { ProductModel } from './product/product.types';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Catalog } from './services/catalog';
import { Basket } from './services/basket';
import { APP_TITLE } from './app.token';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Menu, JsonPipe, RouterOutlet ],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  public catalogService = inject(Catalog);
  public basketService  = inject(Basket);
  public appTitle = inject(APP_TITLE);
  public total = signal<number>(0);

  // public products = signal<ProductModel[]>([
  //   {
  //     "id": "welsch",
  //     "title": "Coding the welsch",
  //     "description": "Tee-shirt col rond - Homme",
  //     "photo": "/assets/coding-the-welsch.jpg",
  //     "price": 20,
  //     "stock": 5
  //   },
  //   {
  //     "id": "world",
  //     "title": "Coding the world",
  //     "description": "Tee-shirt col rond - Homme",
  //     "photo": "/assets/coding-the-world.jpg",
  //     "price": 18,
  //     "stock": 1
  //   },
  //   {
  //     "id": "vador",
  //     "title": "Duck Vador",
  //     "description": "Tee-shirt col rond - Femme",
  //     "photo": "/assets/coding-the-stars.jpg",
  //     "price": 21,
  //     "stock": 2
  //   },
  //   {
  //     "id": "snow",
  //     "title": "Coding the snow",
  //     "description": "Tee-shirt col rond - Femme",
  //     "photo": "/assets/coding-the-snow.jpg",
  //     "price": 19,
  //     "stock": 2
  //   }
  // ]) ;

 get hasProductsInStock(): boolean {
  //return this.products().some(product => product.stock > 0);
  // or return this.products.some( ({stock}) => stock > 0);
  return this.catalogService.hasProductsInStock();
 }
 
 //hasProductsInStock = computed(() => this.products().some(product => product.stock > 0));
 //hasProductsInStock = computed(() => this.products().some(product => product.stock > 0));

  ajouterAuPanier(productModel: ProductModel) {
    
    this.catalogService.decreaseStock(productModel.id);

    const item = {
      id: productModel.id,
      title: productModel.title,
      price: productModel.price
    };
    //this.basketService.addItem(item);
    this.basketService.addItemToSrver(item)
    .subscribe(
      { 
        next: added => this.catalogService.decreaseStock(productModel.id),
        error: err => console.error(err)
      });
   
    this.total.set(this.basketService.total());
  }

  constructor(){
    
  }
  ngOnInit(): void {
    this.catalogService.fetchProducts()
    .subscribe({ error: err => console.error(err)});


    this.basketService.fetchBasket()
      .subscribe({ error: err => console.error(err)});
  }
}
