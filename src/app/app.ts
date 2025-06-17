import { Component } from '@angular/core';
import { Menu } from "./menu/menu";
import { Product } from "./product/product";
import { ProductModel } from './product/product.types';

@Component({
  selector: 'app-root',
  imports: [Menu, Product],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  public total = 0;

  public products: ProductModel[] = [
    {
      "id": "welsch",
      "title": "Coding the welsch",
      "description": "Tee-shirt col rond - Homme",
      "photo": "/assets/coding-the-welsch.jpg",
      "price": 20,
      "stock": 5
    },
    {
      "id": "world",
      "title": "Coding the world",
      "description": "Tee-shirt col rond - Homme",
      "photo": "/assets/coding-the-world.jpg",
      "price": 18,
      "stock": 1
    },
    {
      "id": "vador",
      "title": "Duck Vador",
      "description": "Tee-shirt col rond - Femme",
      "photo": "/assets/coding-the-stars.jpg",
      "price": 21,
      "stock": 2
    },
    {
      "id": "snow",
      "title": "Coding the snow",
      "description": "Tee-shirt col rond - Femme",
      "photo": "/assets/coding-the-snow.jpg",
      "price": 19,
      "stock": 2
    }
  ];

 get hasProductsInStock(): boolean {
  return this.products.some(product => product.stock > 0);
  // or return this.products.some( ({stock}) => stock > 0);
  
 }

  ajouterAuPanier(product: ProductModel) {
    console.info(JSON.stringify(product));
    
    this.total += product.price;
    console.info(this.total);

    product.stock -=1;
    console.info(JSON.stringify(product));
  }
}
