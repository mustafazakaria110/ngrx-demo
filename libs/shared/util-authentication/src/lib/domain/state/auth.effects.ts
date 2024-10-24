import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/authentication.service';
import { login, loginFail, loginSuccess } from './auth.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationEffects {
  login$:any
  navigation$:any;
  constructor(
    private actions$: Actions, // Ensure this is injected correctly
    private authService: AuthService,
    private router: Router
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
          map(() => {
            this.router.navigate(['/admin/users']); // Navigate to dashboard
          })
        ),
      { dispatch: false } // No further actions to dispatch
    );
  }
}
