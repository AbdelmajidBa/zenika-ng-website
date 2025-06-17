import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product } from './product';

describe('Product', () => {
  let component: Product;
  let fixture: ComponentFixture<Product>;
  let value: boolean;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product);

    fixture.componentRef.setInput('product', {
      id: 'ID',
      title: 'TITLE',
      description: 'DESC',
      photo: 'PHOTO',
      price: 10,
      stock: 2,
    });

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('It should display the product photo as image url', () => {

    const img = (fixture.nativeElement as HTMLElement).querySelector('img');

    fixture.detectChanges();
    
    expect(img?.src).toContain(component.product().photo);
  });

   it('It should display the product description', () => {

    const small = (fixture.nativeElement as HTMLElement).querySelector('small');

    fixture.detectChanges();
    
    expect(small?.textContent).toContain(component.product().description);
  });

  it('It should display the product title', () => {

    const title = (fixture.nativeElement as HTMLElement).querySelector('a');

    fixture.detectChanges();
    
    expect(title?.textContent).toContain(component.product().title);
  });

   it('It should display the product price', () => {

    const price = (fixture.nativeElement as HTMLElement).querySelector('p');

    fixture.detectChanges();
    
    expect(price?.textContent).toContain(component.product().price);
  });


  it('It should emit addToBasket event with the given product when the button is clicked', () => {

    
    const addToBasket = spyOn(fixture.componentInstance.addToBasket, 'emit');
    const button = (fixture.nativeElement as HTMLElement).querySelector('button');
    button?.click();
    fixture.detectChanges();
    
    expect(addToBasket).toHaveBeenCalledWith(component.product());
  });


});
