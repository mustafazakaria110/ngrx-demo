import { LoginComponent } from '@icode-tfs-ngrx-demo/util-authentication';
import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
export const appRoutes: Route[] = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: LayoutComponent, children: [

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
