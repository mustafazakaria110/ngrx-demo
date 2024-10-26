import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import { GetUsers, GetUsersFail, GetUsersSuccess } from './user.actions';
import { catchError, map, mergeMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from './user.reducer';
import { EUserRole } from '@icode-tfs-ngrx-demo/util-common';

@Injectable()
export class UsersEffects {
  getUSers$:any
  navigation$:any;
  constructor(
    private actions$: Actions, // Ensure this is injected correctly
    private userService: UserService,
    private router: Router,
    private store: Store<{ users: UserState }>
  ) {

    this.getUSers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(GetUsers),
        mergeMap(() => // Fixed typo from 'passward' to 'password'
          this.userService.getUsers().pipe(
            map((users) => {
                debugger;
                return GetUsersSuccess({data:users});
            }),
            catchError((error) => { 
                debugger;
              alert ("api errrrroooooooooooooooor")
              return of(GetUsersFail()); // Emit loginFail action
            })
          )
        )
      )
    );
  }
 
}
