import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL } from '../../../../../config';
import { catchError, map } from 'rxjs/operators';
import { IProduct } from '../../../../../store/reducers/products.reducer';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../../store';
import { Go } from '../../../../../store/actions/router.actions';

@Injectable()
export class ProductResolveService implements Resolve<IProduct | null> {

  public constructor(
    private http: HttpClient,
    private store: Store<IStore>,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct | null> {
    return this.http.get<IProduct | null>(`/products/${route.paramMap.get('id')}`)
      .pipe(
        map((product: IProduct | null) => {
          if (!product) {
            this.store.dispatch(new Go({path: [`/${URL.BACKOFFICE}`]}));
          }
          return product;
        }),
        catchError(() => {
          this.store.dispatch(new Go({path: [`/${URL.BACKOFFICE}`]}));
          return of(null);
        })
      );
  }

}
