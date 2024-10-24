import { createSelector } from '@ngrx/store';
import { PacsurlState } from './pacsurl.reducer';

export const selectpacs = (state: { pacsurls: PacsurlState }) => state.pacsurls.pacsurls;

export const selectPacsById = (id: number) =>
  createSelector(selectpacs, (pacsurls) => pacsurls.find(pacsurls => pacsurls.id === +id));