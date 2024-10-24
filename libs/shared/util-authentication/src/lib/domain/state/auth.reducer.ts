// src/app/store/auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { login, loginFail, loginSuccess, logout } from './auth.actions';

export interface AuthState {
  userName: string | null;
  userRole: string | null; // Ensure the role is properly typed
  authenticated:boolean | null;
  userToken:string | null;
}

export const initialState: AuthState = {
  userName: 'sara',
  userRole: null,
  authenticated: null,
  userToken : null
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state,{data}) => {
    return { 
      ...state,
        userName: data.userName , 
        userRole: data.userRole,
        authenticated : true ,
        userToken :data.userToken
    };
  }),
  on(loginFail, (state) => {
    return { 
      ...state, 
      userName: null,
      userRole: null,
      userToken:null,
      authenticated : false
    };
  }),
  on(logout, (state) => ({ ...state, userName: null, userRole: null })),
);
