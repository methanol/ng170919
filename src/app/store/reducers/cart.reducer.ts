import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { GetProductsSuccess, ProductsActions } from '../actions/products.actions';
import { IProduct, productsReducer } from './products.reducer';
import {
  AddProductToCart,
  CartProductsActions,
  DecrementProductInCart,
  IncrementProductInCart,
  RemoveProductFromCart
} from '../actions/cart.actions';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { IStore } from '../index';


export interface ICartProduct extends IProduct {
  count: number;
}

export const adapter: EntityAdapter<ICartProduct> = createEntityAdapter({
  selectId: (product: ICartProduct) => product._id
});

const initialState: EntityState<ICartProduct> = adapter.getInitialState([]);

export function cartReducer(
  state: EntityState<ICartProduct> = initialState,
  action: CartProductsActions): EntityState<ICartProduct> {
  if (action instanceof AddProductToCart) {
    const entity: ICartProduct | undefined = state.entities[action.payload._id];
    return adapter.upsertOne({
      ...action.payload,
      count: entity ? entity.count + 1 : 1
    }, state);
  }
  if (action instanceof RemoveProductFromCart) {
    return adapter.removeOne(action.payload._id, state);
  }
  if (action instanceof IncrementProductInCart) {
    return adapter.updateOne({
      id: action.payload._id,
      changes: {count: action.payload.count + 1}
    }, state);
  }
  if (action instanceof DecrementProductInCart) {
    return adapter.updateOne({
      id: action.payload._id,
      changes: {count: action.payload.count - 1}
    }, state);
  }
  return state;
}

export const {selectAll} = adapter.getSelectors(createFeatureSelector('cart'));

export const trueProductsCount: MemoizedSelector<IStore, number> = createSelector(
  selectAll,
  (products: ICartProduct[]) => {
    return products.reduce((count: number, product: ICartProduct) => {
      return count += product.count;
    }, 0);
  }
);
