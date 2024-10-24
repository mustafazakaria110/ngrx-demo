import { createReducer, on } from '@ngrx/store';
import { loadpacsurl, addpacsurl, editpacsurl, deletepacsurl } from './pacsurl.actions';
import { Pacsurl } from '../models/pacsurl';

export interface PacsurlState {
  pacsurls: any[];
}

const initialState: PacsurlState = {
  pacsurls: [
    { id: 1, name: 'Admin', url: 'admin@mail.com' },
    { id: 2, name: 'Mostafa', url: 'mostafa@mail.com' },
    { id: 3, name: 'Saeed', url: 'saeed@mail.com' },
    { id: 4, name: 'User', url: 'user@mail.com' },
    { id: 5, name: 'PowerAdmin', url: 'poweradmin@mail.com' },
    { id: 6, name: 'Physician', url: 'Physician@mail.com' },

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
