import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { URL } from '../../config';

export class AuthGuardService implements CanActivate {

  public constructor(
    private router: Router
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
            this.router.navigate([`/${URL.BACKOFFICE}`]);
            return of(false);
          }
          if (!isLogged) {
            this.router.navigate([`/${URL.LOGIN}`]);
          }
          return of(isLogged);
        })
      );
  }

}
