import { ICartProduct } from '@store/reducers/cart.reducer';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartProductComponent } from './cart-product.component';
import { MatIconModule } from '@angular/material';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

const product: ICartProduct = {
  author: 'Vlad',
  img: 'assets/img/product-2.jpg',
  isFavorite: false,
  price: 221,
  title: 'Product 1',
  _id: '5dbc40267a191bd0a9c32ca9',
  count: 1
};

describe('Cart product', () => {
  let fixture: ComponentFixture<CartProductComponent>;
  let component: CartProductComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartProductComponent
      ],
      imports: [MatIconModule]
    });
    fixture = TestBed.createComponent(CartProductComponent);
    component = fixture.componentInstance;

    component.product = product;

    spyOn(component, 'decrementProduct')
      .and
      .callThrough();

    spyOn(component.decrement, 'emit')
      .and
      .callThrough();
    spyOn(component, 'removeProduct')
      .and
      .callThrough();
    spyOn(component.remove, 'emit')
      .and
      .callThrough();

    fixture.detectChanges();
  });
  it('should decrement add remove product when count 1', () => {
    const decrementProduct: DebugElement = fixture.debugElement.query(By.css('.decrement'));
    decrementProduct.triggerEventHandler('click', {});// $event
    fixture.detectChanges();
    expect(component.decrementProduct)
      .toHaveBeenCalled();
    expect(component.decrement.emit)
      .not
      .toHaveBeenCalled();
    expect(component.remove.emit)
      .toHaveBeenCalledWith(product);
  });
});
