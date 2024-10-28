import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { EUserRole } from '../enums/EUserRole';

@Injectable({
  providedIn: 'root',
})
export class UserAuthorizationGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const role = localStorage.getItem('role');
    const canActivate = Number(role) == EUserRole.User;
    if (!canActivate) alert('Route to Not Authorized');
    return canActivate;
  }
}
