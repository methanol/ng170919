import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../store';
import { Observable } from 'rxjs';
import { ICartProduct, selectAll } from '../../../../store/reducers/cart.reducer';
import { DecrementProductInCart, IncrementProductInCart, RemoveProductFromCart } from '../../../../store/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products$!: Observable<ICartProduct[]>;

  public constructor(
    private store: Store<IStore>
  ) {
  }

  public ngOnInit(): void {
    this.products$ = this.store.select(selectAll);
  }

  public incrementProduct(product: ICartProduct): void {
    this.store.dispatch(new IncrementProductInCart(product));
  }

  public decrementProduct(product: ICartProduct): void {
    this.store.dispatch(new DecrementProductInCart(product));
  }

  public removeProduct(product: ICartProduct): void {
    this.store.dispatch(new RemoveProductFromCart(product));
  }

  public trackProductsBy(_index: number, item: ICartProduct): string {
    return item._id;
  }
}
