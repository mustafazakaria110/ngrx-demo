import { createAction, props } from '@ngrx/store';

export const loadpacsurlParameter = createAction(
  '[pacsurlsParameter] Load pacsurlParameter'
);
export const addpacsurlParameter = createAction(
  '[pacsurlsParameter] Add pacsurlParameter',
  props<{ pacsurlParameter: any }>()
);
export const editpacsurlParameter = createAction(
  '[pacsurlsParameter] Edit pacsurlParameter',
  props<{ pacsurlParameter: { id: number } }>()
);
export const deletepacsurlParameter = createAction(
  '[pacsurlsParameter] Delete pacsurlParameter',
  props<{ id: number }>()
);
