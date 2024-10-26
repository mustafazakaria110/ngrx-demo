import { createReducer, on } from "@ngrx/store";
import { GetUserById, GetUserByIdSuccess, GetUsersSuccess } from './user.actions'
import { User } from "../models/user-entity";
export interface UserState {
    users: any[]
    selectedUser:User|null
}

export const initialState: UserState = {
    users: [],
    selectedUser:null
};
export const usersReducer = createReducer(
    initialState,
    on(GetUsersSuccess, (state, { users }) => {
        return {
            ...state,
            users: users
        };
    }),
    on(GetUserByIdSuccess, (state, { user }) => {
        return {
            ...state,
            selectedUser: user
        };
    }),
)