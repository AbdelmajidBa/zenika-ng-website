import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BasketService } from '../basket/basket.service';
import { BasketStubService } from '../basket/basket.service.stub';
import { BasketItem } from '../basket/basket.types';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [provideRouter([]), { provide: BasketService, useClass: BasketStubService }],
    });
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the number of items', () => {
    // Given
    let numberOfItems = (fixture.nativeElement as HTMLElement).querySelector('.badge')?.textContent;
    expect(numberOfItems).toContain(0);

    // When
    (TestBed.inject(BasketService) as unknown as BasketStubService).items.set([{} as BasketItem, {} as BasketItem]);
    fixture.detectChanges();

    // Then
    numberOfItems = (fixture.nativeElement as HTMLElement).querySelector('.badge')?.textContent;
    expect(numberOfItems).toContain(2);
  });
});
