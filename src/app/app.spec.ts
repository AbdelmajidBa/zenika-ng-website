// import { TestBed } from '@angular/core/testing';
// import { App } from './app';

// describe('App', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [App],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(App);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(App);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to my first component');
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { By } from '@angular/platform-browser';
import { Product } from './product/product';

xdescribe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display the products', () => {
  //   const productsDebugElements = fixture.debugElement.queryAll(
  //     By.directive(Product)
  //   );
  //   productsDebugElements.forEach((productElement, index) => {
  //     const productComponent = productElement.componentInstance;
  //     expect(productComponent.product()).toBe(component.products()[index]);
  //   });
  // });

  //  it('It should update the total when "addToBasket" class method is called (Class testing)', () => {
  //   component.total.set(99);
  //   component.ajouterAuPanier(component.products()[1])
  //   expect(component.total()).toBe(component.products()[1].price + 99);
  // });

  
});