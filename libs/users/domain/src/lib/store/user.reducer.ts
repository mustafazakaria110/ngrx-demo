import { createReducer, on } from "@ngrx/store";
import { GetUsersSuccess } from './user.actions'
export interface UserState {
    users: any[]
}

export const initialState: UserState = {
    users: []
};
export const usersReducer = createReducer(
    initialState,
    on(GetUsersSuccess, (state, { data }) => {
        return {
            ...state,
            users: data
        };
    }),
)