import { Routes } from '@angular/router';
import { PacsurlListComponent } from './pacsurlList/pacsurlList.component';
import { PersistPacsurlComponent } from './persist-pacsurl/persist-pacurl.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: PacsurlListComponent },
  { path: 'pacs', component: PacsurlListComponent },
  { path: 'addpacs', component: PersistPacsurlComponent },
  { path: 'editpacs/:id', component: PersistPacsurlComponent },
];
export const FRONT_ROUTES: Routes = [
  { path: '', component: PacsurlListComponent },
  { path: 'pacs', component: PacsurlListComponent },
  { path: 'pacs/add', component: PersistPacsurlComponent },
  { path: 'pacs/edit/:id', component: PersistPacsurlComponent },
];

