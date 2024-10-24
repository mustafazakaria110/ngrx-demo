import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/authentication.service';
import { login, loginFail, loginSuccess } from './auth.actions';
import { catchError, map, mergeMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from './auth.reducer';
//import { authenticatedUser } from './auth.selectors';

@Injectable()
export class AuthenticationEffects {
  login$:any
  navigation$:any;
  constructor(
    private actions$: Actions, // Ensure this is injected correctly
    private authService: AuthService,
    private router: Router,
    private store: Store<{ auth: AuthState }>
  ) {

    this.login$ = createEffect(() =>
      this.actions$.pipe(
        ofType(login),
        mergeMap(({ username, password }) => // Fixed typo from 'passward' to 'password'
          this.authService.authenticate({username:username, passward:password}).pipe(
            map((u) => {
              return loginSuccess({data:u});
            }),
            catchError((error) => { 
              alert ("not a user")
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
          withLatestFrom(this.store.select((state:any)=>state)), // Get authenticated user from the store
          map(([action, user]) => {
            // Ensure action and user data are present and valid before navigating
            if (action?.data?.userRole === 1) {

              return this.router.navigate(['/admin/users']); // Navigate to admin users page
            }
            else
            {
              return this.router.navigate(['/admin/adduser']); // Navigate to admin users page
            }
          })
        ),
      { dispatch: false } // No further actions to dispatch
    );
  }

 
}
