import { createAction, props } from '@ngrx/store';

export const GetUsers = createAction('[Users] GetUsers');
export const GetUsersSuccess= createAction(
    '[User] Get Users Success',
    props<{ data: any[] }>()
  );
  export const GetUsersFail = createAction(
    '[User] Get Users Failure'
  );
