import { TestBed } from '@angular/core/testing';

import { Basket } from './basket';

describe('Basket', () => {
  let service: Basket;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Basket);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('It should update the items when a product is added', () => {
    
    service.addItem({
      id: '1',
      price: 15,
      title: 'title'
    });

    const product = service.items().find(e=>e.id === '1')
    
    expect(product).toBeTruthy();

  });
});
