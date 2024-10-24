import { createAction, props } from '@ngrx/store';

export const loadpacsurl = createAction('[pacsurls] Load pacsurl');
export const addpacsurl = createAction('[pacsurls] Add pacsurl', props<{ pacsurl: any }>());
export const editpacsurl = createAction('[pacsurls] Edit pacsurl', props<{ pacsurl: { id: number } }>());
export const deletepacsurl = createAction('[pacsurls] Delete pacsurl', props<{ id: number }>());
