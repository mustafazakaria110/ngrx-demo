import { LoginComponent } from '@icode-tfs-ngrx-demo/util-authentication';
import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {PacsurlListComponent,PersistPacsurlComponent} from '@icode-tfs-ngrx-demo/pacsurl-feature' 
export const appRoutes: Route[] = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    {path:'pacs', component:PacsurlListComponent},
    {path:'editpacs/:id', component:PersistPacsurlComponent},
    {path:'addpacs', component:PersistPacsurlComponent},

    {  path: '', component: LayoutComponent, children: [

    ]},
    {  path: '', component: LayoutComponent, children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('@icode-tfs-ngrx-demo/user-features').then((m) => m.User_ROUTES),

      },
      
    ]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];
