import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EUserRole } from '../enums/EUserRole';

@Injectable({
  providedIn: 'root',
})

export class HomePageGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if(!token)
      return true;
    if(Number(role) == EUserRole.Admin)
      this.router.navigate(['/admin/users']);
    else if( Number(role) == EUserRole.User )
      this.router.navigate(['/work/worklist']);
    return true;
  }
}
