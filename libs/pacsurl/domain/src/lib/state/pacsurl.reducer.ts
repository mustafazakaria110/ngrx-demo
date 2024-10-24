import { createReducer, on } from '@ngrx/store';
import { loadpacsurl, addpacsurl, editpacsurl, deletepacsurl } from './pacsurl.actions';
import { Pacsurl } from '../models/pacsurl';

export interface PacsurlState {
  pacsurls: any[];
}

const initialState: PacsurlState = {
  pacsurls: [
    { id: 1, name: 'pacs1', url: 'pacs1@mail.com' },
    { id: 2, name: 'pacs2', url: 'pacs2@mail.com' },
    { id: 3, name: 'pacs3', url: 'pacs3@mail.com' },
    { id: 4, name: 'pacs4', url: 'pacs4@mail.com' },
    { id: 5, name: 'pacs5', url: 'pacs5@mail.com' },
    { id: 6, name: 'pacs6', url: 'pacs6@mail.com' },

  ],
};

export const pacsReducer = createReducer(
  initialState,

  on(loadpacsurl, (state) => state),

  on(addpacsurl, (state, { pacsurl }) => ({
    ...state,
    pacsurls: [...state.pacsurls, { id: state.pacsurls.length+1, ...pacsurl }], 
  })),
  on(editpacsurl, (state, { pacsurl }) => ({
    ...state,
    pacsurls: state.pacsurls.map(u => (+u.id === +pacsurl.id ? pacsurl : u)),  
  })),

  on(deletepacsurl, (state, { id }) => ({
    ...state,
    pacsurls: state.pacsurls.filter(pacsurl => pacsurl.id !== id),
  }))

);
