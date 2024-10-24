import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserPersistComponent } from './user-persist/user-persist.component';


export const User_ROUTES: Routes = [
    { path: '', component: UserListComponent },
    { path: 'users', component: UserListComponent },
    { path: 'adduser', component: UserPersistComponent },
    { path: 'edituser/:id', component: UserPersistComponent },
  ];