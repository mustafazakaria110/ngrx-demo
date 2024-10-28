import { createReducer, on } from '@ngrx/store';
import {
  GetUserById,
  GetUserByIdSuccess,
  GetUsersSuccess,
  ResetDetailsMode,
  SaveGridState,
} from './user.actions';
import { User } from '../models/user-entity';
export interface UserState {
  users: any[];
  selectedUser: User | null;
  detailsPageMode: string | null;
  gridState: object;
}

export const initialState: UserState = {
  users: [],
  selectedUser: null,
  detailsPageMode: null,
  gridState: {
    filter: {
      filters: [{ field: 'risUserId', operator: 'contains', value: 'te' }],
      logic: 'and',
    },
    group: [],
    skip: 0,
    sort: [],
    take: 100,
  },
};
export const usersReducer = createReducer(
  initialState,
  on(GetUsersSuccess, (state, { users }) => {
    return {
      ...state,
      users: users,
    };
  }),
  on(GetUserByIdSuccess, (state, { user }) => {
    return {
      ...state,
      selectedUser: user,
    };
  }),
  on(GetUserById, (state, { id, mode }) => {
    return {
      ...state,
      detailsPageMode: mode,
    };
  }),
  on(ResetDetailsMode, (state) => {
    return {
      ...state,
      detailsPageMode: null,
    };
  }),
  on(SaveGridState, (state, { gridState }) => {
    return { ...state, gridState: gridState };
  })
);
