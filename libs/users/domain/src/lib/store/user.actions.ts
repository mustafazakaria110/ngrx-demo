import { createAction, props } from '@ngrx/store';
import { User } from '../models/user-entity';

export const GetUsers = createAction('[Users] Get Users');
export const GetUsersSuccess= createAction(
  '[User] Get Users Success',
  props<{ users: User[] }>()
);
export const GetUsersFail = createAction(
  '[User] Get Users Failure'
);

export const GetUserById = createAction('[Users] Get User By ID',
  props<{ id: number|null|undefined }>()
);
export const GetUserByIdSuccess= createAction(
  '[User] Get User By ID Success',
  props<{ user: User }>()
);
export const GetUserByIdFail = createAction(
  '[User] Get User By ID Failure'
);

export const persistUser = createAction('[Users] Persist User',
  props<{ user:User }>()
);
export const persistUserSuccess= createAction(
  '[User] Persist User Success',
);
export const persistUserFail = createAction(
  '[User] Persist User Failure'
);
