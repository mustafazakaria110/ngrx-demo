import { createAction, props } from '@ngrx/store';
import { User } from '../models/user-entity';

export const GetUsers = createAction('[Users] Get Users');
export const GetUsersSuccess= createAction(
  '[Users] Get Users Success',
  props<{ users: User[] }>()
);
export const GetUsersFail = createAction(
  '[Users] Get Users Failure'
);

export const GetUserById = createAction('[Users] Get User By ID',
  props<{ id: number|null|undefined, mode:string}>()
);
export const ResetDetailsMode = createAction('[Users] Reset Details Mode'
);
export const GetUserByIdSuccess= createAction(
  '[Users] Get User By ID Success',
  props<{ user: User|null }>()
);
export const GetUserByIdFail = createAction(
  '[Users] Get User By ID Failure'
);

export const persistUser = createAction('[Users] Persist User',
  props<{ user:User }>()
);
export const persistUserSuccess= createAction(
  '[Users] Persist User Success',
);
export const persistUserFail = createAction(
  '[Users] Persist User Failure'
);

export const deleteUser = createAction('[User] Delete User',
  props<{ id:number }>()
);
export const deleteUserSuccess= createAction(
  '[Users] Delete User Success',
);
export const deleteUserFail = createAction(
  '[Users] Delete User Failure'
);
