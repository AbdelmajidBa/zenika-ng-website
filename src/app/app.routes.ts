import { Routes } from '@angular/router';
import { Catalog } from './services/catalog';
import { Basket } from './services/basket';
import { CatalogComponent } from './catalog-component/catalog-component';
import { BasketComponent } from './basket-component/basket-component';

export const routes: Routes = [
     {
    path: 'catalog',
    component: CatalogComponent,
  },
  
  {
    path: 'basket',
    component: BasketComponent,
  },
  {
    path: '**',
    redirectTo: 'catalog',
  },
];
