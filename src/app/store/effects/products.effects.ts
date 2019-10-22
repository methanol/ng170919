import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  GET_PRODUCTS_PENDING, GetProductsError, GetProductsSuccess,
  ProductsActions
} from '../actions/products.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IProduct } from '../reducers/products.reducer';

@Injectable()
export class ProductsEffects {

  @Effect()
  public getProducts$: Observable<ProductsActions> = this.actions$
    .pipe(
      ofType(GET_PRODUCTS_PENDING),
      switchMap(() => {
        return this.http.get<IProduct[]>(`/products`)
          .pipe(
            map((products: IProduct[]) => new GetProductsSuccess(products)),
            catchError((err: Error) => of(new GetProductsError(err)),
            )
          );
      })
    );

  public constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {
  }
}
