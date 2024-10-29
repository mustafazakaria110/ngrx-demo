import { createReducer, on } from "@ngrx/store";
import  * as DateRangeActions from "./date.actions";


export const initialDateRangeState: DateRangeActions.DateRangeState = {
    openEvent: null,
    filterDate: null,
};
  
export const dateRangeReducer = createReducer(
    initialDateRangeState ,
    on(DateRangeActions.openDateRangePopup, (state, action) => ({
        ...state,
        openEvent: action.event
    })),
    on(DateRangeActions.filterRange, (state, action) => ({
        ...state,
        filterDate :action.data.event
    })),
)