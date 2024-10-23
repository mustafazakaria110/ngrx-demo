import { LoginComponent } from '@icode-tfs-ngrx-demo/util-authentication';
import { Route } from '@angular/router';
export const appRoutes: Route[] = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
];
