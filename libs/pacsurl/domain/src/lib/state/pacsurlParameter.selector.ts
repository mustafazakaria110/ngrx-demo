import { createSelector } from '@ngrx/store';
import { PacsurlParameterState } from './pacsurlParameter.reducer';

export const selectpacsParameter = (state: {
  pacsurlsParameter: PacsurlParameterState;
}) => state.pacsurlsParameter.pacsurlsParameter;

export const selectPacsParameterById = (id: number) =>
  createSelector(selectpacsParameter, (pacsurlsParameter) =>
    pacsurlsParameter.find((pacsurlsParameter) => pacsurlsParameter.id === +id)
  );
