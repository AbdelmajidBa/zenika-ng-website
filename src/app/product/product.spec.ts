import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product } from './product';
import { ProductModel } from './product.types';

describe('Product', () => {
  let component: Product;
  let fixture: ComponentFixture<Product>;
  let nativeElement: HTMLElement;
  let product : ProductModel;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product);
    product = {
      id: 'ID',
      title: 'TITLE',
      description: 'DESC',
      photo: 'PHOTO',
      price: 10,
      stock: 1,
    };
    fixture.componentRef.setInput('product', product);

    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('It should display the product photo as image url', () => {

    const img = nativeElement.querySelector('img');

    fixture.detectChanges();
    
    expect(img?.src).toContain(component.product().photo);
  });

   it('It should display the product description', () => {

    const small = nativeElement.querySelector('small');

    fixture.detectChanges();
    
    expect(small?.textContent).toContain(component.product().description);
  });

  it('It should display the product title', () => {

    const title = nativeElement.querySelector('a');

    fixture.detectChanges();
    
    expect(title?.textContent).toContain(component.product().title);
  });

   it('It should display the product price', () => {

    const price = nativeElement.querySelector('p');

    fixture.detectChanges();
    
    expect(price?.textContent).toContain(component.product().price);
  });


  it('It should emit addToBasket event with the given product when the button is clicked', () => {

    
    const addToBasket = spyOn(fixture.componentInstance.addToBasket, 'emit');
    const button = nativeElement.querySelector('button');
    button?.click();
    fixture.detectChanges();
    
    expect(addToBasket).toHaveBeenCalledWith(component.product());
  });

  it('It should add the "text-bg-warning" className when stock is equal to 1', () => {

    const bgWarning = nativeElement.querySelector('div.card.h-100.text-center');
    
    fixture.detectChanges();

    expect(bgWarning).toBeTruthy();
    expect(bgWarning?.classList).toContain('text-bg-warning');
  });


  it('It should not add the "text-bg-warning" className when stock is greater than 1', () => {

     product = {
      id: 'ID',
      title: 'TITLE',
      description: 'DESC',
      photo: 'PHOTO',
      price: 10,
      stock: 2,
    };
    fixture.componentRef.setInput('product', product);
    const bgWarning = nativeElement.querySelector('div.card.h-100.text-center');
    
    fixture.detectChanges();

    expect(bgWarning).toBeTruthy();
    expect(bgWarning?.classList).not.toContain('text-bg-warning');
  });

});
