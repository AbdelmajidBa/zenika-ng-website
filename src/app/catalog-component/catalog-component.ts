import { Component, inject, OnInit, signal } from '@angular/core';
import { Catalog } from '../services/catalog';
import { Basket } from '../services/basket';
import { APP_TITLE } from '../app.token';
import { ProductModel } from '../product/product.types';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Product } from "../product/product";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog-component',
  imports: [CurrencyPipe, Product, RouterLink ],
  templateUrl: './catalog-component.html',
  styleUrl: './catalog-component.css'
})
export class CatalogComponent implements OnInit {

  public catalogService = inject(Catalog);
  public basketService  = inject(Basket);
  public appTitle = inject(APP_TITLE);
  public total = signal<number>(0);

  

 get hasProductsInStock(): boolean {
  return this.catalogService.hasProductsInStock();
 }
 
 ajouterAuPanier(productModel: ProductModel) {
    
    this.catalogService.decreaseStock(productModel.id);

    const item = {
      id: productModel.id,
      title: productModel.title,
      price: productModel.price
    };
    this.basketService.addItemToSrver(item)
    .subscribe(
      { 
        next: added => this.catalogService.decreaseStock(productModel.id),
        error: err => console.error(err)
      });
   
    this.total.set(this.basketService.total());
  }

  ngOnInit(): void {
    this.catalogService.fetchProducts()
    .subscribe({ error: err => console.error(err)});


    this.basketService.fetchBasket()
      .subscribe({ error: err => console.error(err)});
  }
}