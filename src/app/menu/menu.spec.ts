import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu } from './menu';
import { BasketStubService } from '../services/basket.stub.service';
import { Basket } from '../services/basket';

describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;
  let basketService: Basket;
  let nativeElement: HTMLElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu],
      providers: [{provide: Basket, useClass: BasketStubService}]
    })
    .compileComponents();
    basketService = TestBed.inject(Basket);
    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('It should display the number of items', () => {

    component.basketService.addItem({id: '1', price: 12, title:'title'});
    
    expect(component.basketService.total()).toBe(12);

    const span = nativeElement.querySelector('span');
    
    fixture.detectChanges();

    expect(span).toBeTruthy();
    expect(span?.textContent).toContain(12);


  });

});
