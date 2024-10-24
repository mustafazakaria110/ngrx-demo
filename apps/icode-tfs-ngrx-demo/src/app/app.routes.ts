import { LoginComponent } from '@icode-tfs-ngrx-demo/util-authentication';
import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {PacsurlListComponent} from '@icode-tfs-ngrx-demo/pacsurl-feature' 
export const appRoutes: Route[] = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    {path:'pacs', component:PacsurlListComponent},
    {  path: '', component: LayoutComponent, children: [

    ]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];
