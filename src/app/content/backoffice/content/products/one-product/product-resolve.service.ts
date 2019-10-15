import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { IProduct } from '../products.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL } from '../../../../../config';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ProductResolveService implements Resolve<IProduct | null> {

  public constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct | null> {
    return this.http.get<IProduct | null>(`/products/${route.paramMap.get('id')}`)
      .pipe(
        map((product: IProduct | null) => {
          if (!product) {
            this.router.navigate([`/${URL.BACKOFFICE}`]);
          }
          return product;
        }),
        catchError(() => {
          this.router.navigate([`/${URL.BACKOFFICE}`]);
          return of(null);
        })
      );
  }

}
