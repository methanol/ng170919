import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum RouterActions {
  GO = '[Router] GO',
  BACK = '[Router] BACK',
  FORWARD = '[Router] FORWARD',
}

export interface IRouterPayload {
  path: any[];
  query?: object;
  extras?: NavigationExtras;
}

export class Go implements Action {
  public readonly type: string = RouterActions.GO;

  public constructor(public payload: IRouterPayload) {
  }
}

export class Back implements Action {
  public readonly type: string = RouterActions.BACK;
}

export class Forward implements Action {
  public readonly type: string = RouterActions.FORWARD;
}

export type RouterActionsTypes = Go | Back | Forward;
