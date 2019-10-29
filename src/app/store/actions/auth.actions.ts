import { Action } from '@ngrx/store';

export enum AuthActions {
  LOGIN_PENDING = 'LOGIN_PENDING',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',

  SIGN_UP_PENDING = 'SIGN_UP_PENDING',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAIL = 'SIGN_UP_FAIL',


  LOGOUT_PENDING = 'LOGOUT_PENDING',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAIL = 'LOGOUT_FAIL',
}

export class LoginPending implements Action {
  public readonly type: string = AuthActions.LOGIN_PENDING;

  public constructor(public readonly payload: any) {

  }
}

export class LoginSuccess implements Action {
  public readonly type: string = AuthActions.LOGIN_SUCCESS;
}

export class LoginFail implements Action {
  public readonly type: string = AuthActions.LOGIN_FAIL;
}


export class SignUpPending implements Action {
  public readonly type: string = AuthActions.SIGN_UP_PENDING;

  public constructor(public readonly payload: any) {

  }
}

export class SignUpSuccess implements Action {
  public readonly type: string = AuthActions.SIGN_UP_SUCCESS;
}

export class SignUpFail implements Action {
  public readonly type: string = AuthActions.SIGN_UP_FAIL;
}


export class LogoutPending implements Action {
  public readonly type: string = AuthActions.LOGOUT_PENDING;
}

export class LogoutSuccess implements Action {
  public readonly type: string = AuthActions.LOGOUT_SUCCESS;
}

export class LogoutFail implements Action {
  public readonly type: string = AuthActions.LOGOUT_FAIL;
}

export type AuthActionsType = LoginPending
  | LoginSuccess
  | LoginFail
  | SignUpPending
  | SignUpSuccess
  | SignUpFail
  | LogoutSuccess
  | LogoutFail
  | LogoutPending;
