import { Action } from '@ngrx/store';
import { ICartProduct } from '../reducers/cart.reducer';
import { IProduct } from '../reducers/products.reducer';

export enum CartActions {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  INCREMENT_PRODUCT_IN_CART = 'INCREMENT_PRODUCT_IN_CART',
  DECREMENT_PRODUCT_IN_CART = 'DECREMENT_PRODUCT_IN_CART',
}

export class AddProductToCart implements Action {
  public readonly type: string = CartActions.ADD_PRODUCT_TO_CART;
  public constructor(public payload: IProduct) {
  }
}

export class RemoveProductFromCart implements Action {
  public readonly type: string = CartActions.REMOVE_PRODUCT_FROM_CART;

  public constructor(public payload: ICartProduct) {
  }
}

export class IncrementProductInCart implements Action {
  public readonly type: string = CartActions.INCREMENT_PRODUCT_IN_CART;

  public constructor(public payload: ICartProduct) {
  }
}

export class DecrementProductInCart implements Action {
  public readonly type: string = CartActions.DECREMENT_PRODUCT_IN_CART;

  public constructor(public payload: ICartProduct) {
  }
}

export type CartProductsActions =
  | AddProductToCart
  | RemoveProductFromCart
  | IncrementProductInCart
  | DecrementProductInCart;
