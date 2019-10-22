import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';
import { IProduct, productsReducer } from './reducers/products.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { Params, RouterStateSnapshot } from '@angular/router';

export interface IStore {
  products: IProduct[];
  router: RouterReducerState<IRouterStateUrl>;
}

export const reducers: ActionReducerMap<IStore, any> = {
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
