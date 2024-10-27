import { createReducer, on } from "@ngrx/store";
import { GetUserById, GetUserByIdSuccess, GetUsersSuccess, ResetDetailsMode } from './user.actions'
import { User } from "../models/user-entity";
export interface UserState {
    users: any[]
    selectedUser:User|null
    detailsPageMode:string|null
}

export const initialState: UserState = {
    users: [],
    selectedUser:null,
    detailsPageMode:null
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
    on(GetUserById,(state,{id,mode})=>{
        return {
            ...state,
            detailsPageMode:mode
        };
    }),
    on(ResetDetailsMode,(state,)=>{
        return {
            ...state,
            detailsPageMode : null
        };
    })
)