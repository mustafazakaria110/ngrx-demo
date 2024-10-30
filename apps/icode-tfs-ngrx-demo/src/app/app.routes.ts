import { LoginComponent } from '@icode-tfs-ngrx-demo/util-authentication';
import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {
  PacsurlListComponent,
  PersistPacsurlComponent,
} from '@icode-tfs-ngrx-demo/pacsurl-feature';
import {
  HomePageGuard,
  AdminAuthorizationGuard,
  UserAuthorizationGuard,
} from '@icode-tfs-ngrx-demo/util-common';
import { ParameterComponent } from '@icode-tfs-ngrx-demo/pacsurl-ui';
export const appRoutes: Route[] = [
  { path: '', component: LoginComponent, canActivate: [HomePageGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'pacs', component: PacsurlListComponent },
  { path: 'editpacs/:id', component: PersistPacsurlComponent },
  { path: 'addpacs', component: PersistPacsurlComponent },
  { path: 'editParmeter/:id', component: ParameterComponent },
  { path: 'addParameter/:pacsid', component: ParameterComponent },

  { path: '', component: LayoutComponent, children: [] },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admin',
        canActivate: [],
        loadChildren: () =>
          import('@icode-tfs-ngrx-demo/user-features').then(
            (m) => m.User_ROUTES
          ),
      },
      {
        path: 'admin',
        canActivate: [],
        loadChildren: () =>
          import('@icode-tfs-ngrx-demo/dicomnodesfeature').then(
            (m) => m.DicomNodes_ROUTES
          ),
      },
      {
        path: 'admin',
        canActivate: [],
        loadChildren: () =>
          import('@icode-tfs-ngrx-demo/pacsurl-feature').then(
            (m) => m.pacs_ROUTES
          ),
      },
      {
        path: 'work',
        canActivate: [UserAuthorizationGuard],
        loadChildren: () =>
          import('@icode-tfs-ngrx-demo/worklist-feature').then(
            (m) => m.Worklist_ROUTES
          ),
      },
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
