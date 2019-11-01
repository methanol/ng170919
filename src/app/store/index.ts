import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';
import { EntityState } from '@ngrx/entity';
import { IProduct, productsReducer } from './reducers/products.reducer';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Params, RouterStateSnapshot } from '@angular/router';
import { authReducer, IAuthState } from './reducers/auth.reducer';
import { AuthActionsType, LogoutSuccess } from './actions/auth.actions';
import { cartReducer, ICartProduct } from './reducers/cart.reducer';

export interface IStore {
  auth: IAuthState;
  cart: EntityState<ICartProduct>;
  products: IProduct[];
  router: RouterReducerState<IRouterStateUrl>;
}

export const reducers: ActionReducerMap<IStore, any> = {
  auth: authReducer,
  cart: cartReducer,
  products: productsReducer,
  router: routerReducer
};

export interface IRouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<IRouterStateUrl> {
  public serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
    let route: any = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const {
      url,
      root: {queryParams},
    } = routerState;
    const {params} = route;
    return {url, params, queryParams};
  }
}


export function logoutAndClearState(reducer: ActionReducer<IStore>): ActionReducer<IStore> {
  return (state: IStore | undefined, action: AuthActionsType) => {
    if (action instanceof LogoutSuccess) {
      state = undefined;
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<IStore>[] = [logoutAndClearState];
