import { adminList } from './../../../../../libs/shared/ui-common/src/lib/ui/sidebar/sidebar-lists';
import { sidebarModel } from './../../../../../libs/shared/ui-common/src/lib/domain/models/sidebar-model';
import { NavbarComponent } from './../../../../../libs/shared/ui-common/src/lib/ui/navbar/navbar.component';
import { SidebarComponent } from './../../../../../libs/shared/ui-common/src/lib/ui/sidebar/sidebar.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  constructor(private router: Router) {}
  sidebarList: sidebarModel[] = adminList;
  _imageProfilePath = '';
  username = '';
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
}
