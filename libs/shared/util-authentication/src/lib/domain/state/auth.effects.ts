import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/authentication.service';
import { login, loginFail, loginSuccess } from './auth.actions';
import {
  catchError,
  map,
  mergeMap,
  take,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from './auth.reducer';
import { EUserRole } from '@icode-tfs-ngrx-demo/util-common';

@Injectable()
export class AuthenticationEffects {
  login$: any;
  navigation$: any;
  constructor(
    private actions$: Actions, // Ensure this is injected correctly
    private authService: AuthService,
    private router: Router,
    private store: Store<{ auth: AuthState }>
  ) {
    this.login$ = createEffect(() =>
      this.actions$.pipe(
        ofType(login),
        mergeMap(
          (
            { username, password } // Fixed typo from 'passward' to 'password'
          ) =>
            this.authService
              .authenticate({ username: username, passward: password })
              .pipe(
                map((u) => {
                  if (u.id > 0) return loginSuccess({ data: u });
                  else return loginFail();
                }),
                catchError((error) => {
                  if (error != 'Not authorized')
                    alert('api errrrroooooooooooooooor');
                  return of(loginFail()); // Emit loginFail action
                })
              )
        )
      )
    );

    this.navigation$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(loginSuccess),
          withLatestFrom(this.store.select((state: any) => state)), // Get authenticated user from the store
          map(([action, user]) => {
            localStorage.setItem('token', action?.data.userToken);
            localStorage.setItem('role', JSON.stringify(action?.data.userRole));
            if (action?.data?.userRole === EUserRole.Admin) {
              return this.router.navigate(['/admin/users']); // Navigate to admin users page
            } else {
              return this.router.navigate(['/work/worklist']); // Navigate to admin users page
            }
          })
        ),
      { dispatch: false } // No further actions to dispatch
    );
  }
}
