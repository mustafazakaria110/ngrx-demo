// src/app/store/auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { login, loginFail, loginSuccess, logout } from './auth.actions';

export interface AuthState {
  username: string | null;
  role: string | null; // Ensure the role is properly typed
  authenticated:boolean | null;
  token:string | null;
}

export const initialState: AuthState = {
  username: null,
  role: null,
  authenticated: null,
  token : null
};

// Define your users array here
const users = [
  { id: 1, username: 'admin', role: 'admin' },
  { id: 2, username: 'user', role: 'user' },
  { id: 3, username: 'jane', role: 'user' },
];

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state) => {
    return { 
      ...state, 
      //username: data?.username || null, 
      //role: data.role == 1 ?  'admin' : 'user', // Explicitly cast the role,
      authenticated : true ,
      token :"abc"
    };
  }),
  on(loginFail, (state) => {
    return { 
      ...state, 
      username: null,
      role: null,
      token:null,
      authenticated : false
    };
  }),
  on(logout, (state) => ({ ...state, username: null, role: null })),
);
