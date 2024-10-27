import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import { GetUserById, GetUserByIdFail, GetUserByIdSuccess, 
  GetUsers, GetUsersFail, GetUsersSuccess, 
  persistUser, persistUserFail, persistUserSuccess,
  deleteUser
} from './user.actions';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from './user.reducer';
import { User } from '../models/user-entity'

@Injectable()
export class UsersEffects {
  getUsers$: any;
  getUsersById$: any;
  persistUser$:any;
  deleteUser$:any;
  navigateToUsersListPage$: any;
 
  constructor(
    private actions$: Actions, // Ensure this is injected correctly
    private userService: UserService,
    private router: Router,
    private store: Store<{ users: UserState }>
  ) {

  this.getUsers$= createEffect(() =>
    this.actions$.pipe(
      ofType(GetUsers),
      mergeMap(() => // Fixed typo from 'passward' to 'password'
        this.userService.getUsers().pipe(
          map((users) => {
              return GetUsersSuccess({users});
          }),
          catchError((error) => { 
            alert ("api errrrroooooooooooooooor")
            return of(GetUsersFail()); // Emit loginFail action
          })
        )
      )
    )
  );


  this.getUsersById$= createEffect(() =>
    this.actions$.pipe(
      ofType(GetUserById),
      mergeMap(({id}) => 
        { 
          return this.userService.getUserById(id?id:0).pipe(
          map((user:User) => {
              return user.id > 0? GetUserByIdSuccess({user}):GetUserByIdSuccess({user:null});
          }),
          catchError((error) => { 
            alert ("api errrrroooooooooooooooor")
            return of(GetUserByIdFail()); // Emit loginFail action
          })
        )}
      )
    )
  );


  this.persistUser$= createEffect(() =>
    this.actions$.pipe(
      ofType(persistUser),
      mergeMap(({user}) => 
        { 
          return this.userService.persistUser(user).pipe(
          map((user:User) => {
              return persistUserSuccess();
          }),
          catchError((error) => { 
            alert ("api errrrroooooooooooooooor")
            return of(persistUserFail()); // Emit loginFail action
          })
        )}
      )
    )
  );

  this.deleteUser$= createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      mergeMap(({id}) => 
        { 
          return this.userService.deleteUser(id).pipe(
          map(() => {
            return GetUsers();
          }),
          catchError((error) => { 
            alert ("api errrrroooooooooooooooor")
            return of(GetUsers()); // Emit loginFail action
          })
        )}
      )
    )
  );

  this.navigateToUsersListPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(persistUserSuccess),
        map(() => {
            return this.router.navigate(['/admin/users']); // Navigate to admin users page
        })
      ),
    { dispatch: false } // No further actions to dispatch
  );
}
 
}
