import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Go, IRouterPayload, RouterActions } from '../actions/router.actions';
import { Router } from '@angular/router';

@Injectable()
export class RouterEffects {

  @Effect({dispatch: false})
  public navigate$: Observable<any> = this.actions$
    .pipe(
      ofType(RouterActions.GO),
      map((action: Go) => action.payload),
      tap(({path, query: queryParams, extras}: IRouterPayload) => {
        this.router.navigate(path, {queryParams, ...extras});
      })
    );

  @Effect({dispatch: false})
  public navigateBack$: Observable<any> = this.actions$
    .pipe(
      ofType(RouterActions.BACK),
      tap(() => {
        this.location.back();
      })
    );

  @Effect({dispatch: false})
  public navigateForward$: Observable<any> = this.actions$
    .pipe(
      ofType(RouterActions.FORWARD),
      tap(() => {
        this.location.forward();
      })
    );

  public constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {
  }
}
