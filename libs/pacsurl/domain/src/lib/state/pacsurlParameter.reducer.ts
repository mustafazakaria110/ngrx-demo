import { createReducer, on } from '@ngrx/store';
import {
  addpacsurlParameter,
  deletepacsurlParameter,
  editpacsurlParameter,
  loadpacsurlParameter,
} from './pacsurlParameter.actions';

export interface PacsurlParameterState {
  pacsurlsParameter: any[];
}

const initialState: PacsurlParameterState = {
  pacsurlsParameter: [
    {
      id: 1,
      name: 'pacs1Parameter',
      url: 'pacs1Parameter@mail.com',
      pacsid: 1,
    },
    {
      id: 2,
      name: 'pacs2Parameter',
      url: 'pacs2Parameter@mail.com',
      pacsid: 2,
    },
    {
      id: 3,
      name: 'pacs3Parameter',
      url: 'pacs3Parameter@mail.com',
      pacsid: 3,
    },
    {
      id: 4,
      name: 'pacs4Parameter',
      url: 'pacs4Parameter@mail.com',
      pacsid: 4,
    },
    {
      id: 5,
      name: 'pacs5Parameter',
      url: 'pacs5Parameter@mail.com',
      pacsid: 5,
    },
    {
      id: 6,
      name: 'pacs6Parameter',
      url: 'pacs6Parameter@mail.com',
      pacsid: 6,
    },
  ],
};

export const pacspacsurlsParameterReducer = createReducer(
  initialState,

  on(loadpacsurlParameter, (state) => state),

  on(addpacsurlParameter, (state, { pacsurlParameter }) => ({
    ...state,
    pacsurlsParameter: [
      ...state.pacsurlsParameter,
      { id: state.pacsurlsParameter.length + 1, ...pacsurlParameter },
    ],
  })),
  on(editpacsurlParameter, (state, { pacsurlParameter }) => ({
    ...state,
    pacsurlsParameter: state.pacsurlsParameter.map((u) =>
      +u.id === +pacsurlParameter.id ? pacsurlParameter : u
    ),
  })),

  on(deletepacsurlParameter, (state, { id }) => ({
    ...state,
    pacsurlsParameter: state.pacsurlsParameter.filter(
      (pacsurlParameter) => pacsurlParameter.id !== id
    ),
  }))
);
