import {
  AuthActionsType,
  LoginFail,
  LoginPending,
  LoginSuccess,
  LogoutSuccess,
  SignUpFail,
  SignUpPending,
  SignUpSuccess
} from '../actions/auth.actions';


export interface IAuthState {
  isLogged: boolean;
  loading: boolean;
}

const initialState: IAuthState = {
  isLogged: false,
  loading: false
};

export function authReducer(state: IAuthState = initialState, action: AuthActionsType): IAuthState {
  if (action instanceof SignUpPending) {
    return {
      ...state,
      loading: true
    };
  }
  if (action instanceof SignUpSuccess) {
    return {
      ...state,
      isLogged: true,
      loading: false
    };
  }
  if (action instanceof SignUpFail) {
    return {
      ...state,
      loading: false
    };
  }
  if (action instanceof LoginPending) {
    return {
      ...state,
      loading: true
    };
  }
  if (action instanceof LoginSuccess) {
    return {
      ...state,
      isLogged: true,
      loading: false
    };
  }
  if (action instanceof LoginFail) {
    return {
      ...state,
      loading: false
    };
  }
  if (action instanceof LogoutSuccess) {
    return {
      ...initialState
    };
  }

  return state;
}
