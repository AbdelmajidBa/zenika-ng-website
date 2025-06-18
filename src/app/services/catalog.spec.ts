import { TestBed } from '@angular/core/testing';

import { Catalog } from './catalog';

describe('Catalog', () => {
  let service: Catalog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Catalog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('It should decrease the product stock', () => {
    
    service.decreaseStock('world');

    const product = service.products().find(e=>e.id === 'world')
    
    expect(product?.stock).toBe(0);
  });

   it('It should not decrease the product stock when stock is empty', () => {
    
    service.decreaseStock('world');

    const product = service.products().find(e=>e.id === 'world')
    
    expect(product?.stock).toBe(0);

    service.decreaseStock('world');
    expect(product?.stock).toBe(0);
  });
});
