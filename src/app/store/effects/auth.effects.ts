import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {
  AuthActions,
  AuthActionsType,
  LoginFail,
  LoginPending,
  LoginSuccess, LogoutFail, LogoutSuccess,
  SignUpFail,
  SignUpPending,
  SignUpSuccess
} from '../actions/auth.actions';
import { AuthService } from '../../shared/services/auth.service';
import { Go } from '../actions/router.actions';

@Injectable()
export class AuthEffects {

  @Effect()
  public login$: Observable<AuthActionsType> = this.actions$
    .pipe(
      ofType(AuthActions.LOGIN_PENDING),
      map(({payload: user}: LoginPending) => user),
      switchMap((userData: any) => {
        return this.authService.login(userData)
          .pipe(
            switchMap((user: any) => this.authService.tokenToLocalStorage(user)),
            mergeMap((user: any) => [
              new LoginSuccess(),
              new Go({path: ['/backoffice']})
            ]),
            catchError(() => of(new LoginFail()),
            )
          );
      })
    );

  @Effect()
  public signUp$: Observable<AuthActionsType> = this.actions$
    .pipe(
      ofType(AuthActions.SIGN_UP_PENDING),
      map(({payload: user}: SignUpPending) => user),
      switchMap((userData: any) => {
        return this.authService.signUp(userData)
          .pipe(
            switchMap((user: any) => this.authService.tokenToLocalStorage(user)),
            mergeMap((user: any) => [
              new SignUpSuccess(),
              new Go({path: ['/backoffice']})
            ]),
            catchError(() => of(new SignUpFail()),
            )
          );
      })
    );

  @Effect()
  public logout$: Observable<AuthActionsType> = this.actions$
    .pipe(
      ofType(AuthActions.LOGOUT_PENDING),
      switchMap(() => {
        return this.authService.removeTokenFromLocalStorage('accessToken')
          .pipe(
            mergeMap((user: any) => [
              new LogoutSuccess(),
              new Go({path: ['/login']})
            ]),
            catchError(() => of(new LogoutFail()),
            )
          );
      })
    );

  @Effect()
  public init$: Observable<AuthActionsType> = this.actions$
    .pipe(
      ofType(AuthActions.CHECK_JWT),
      switchMap(() => {
        return this.authService.checkUser()
          .pipe(
            mergeMap((user: any) => [
              new LoginSuccess(),
            ]),
            catchError(() => of(new LoginFail()),
            )
          );
      })
    );

  public constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {
  }
}
