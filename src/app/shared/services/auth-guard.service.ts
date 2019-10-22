import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import {  switchMap } from 'rxjs/operators';
import { URL } from '../../config';
import { Store } from '@ngrx/store';
import { IStore } from '../../store';
import { Go } from '../../store/actions/router.actions';

export class AuthGuardService implements CanActivate {

  public constructor(
    private store: Store<IStore>
  ) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;
    return of(true)
      .pipe(
        switchMap((isLogged: boolean) => {
          if (!isLogged && (url === `/${URL.LOGIN}` || url === `/${URL.SIGNUP}`)) {
            return of(true);
          }
          if (isLogged && (url === `/${URL.LOGIN}` || url === `/${URL.SIGNUP}`)) {
            this.store.dispatch(new Go({path: [`/${URL.BACKOFFICE}`]}));
            return of(false);
          }
          if (!isLogged) {
            this.store.dispatch(new Go({path: [`/${URL.LOGIN}`]}));
          }
          return of(isLogged);
        })
      );
  }

}
