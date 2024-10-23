import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'lib-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  
  @Input() _imagePath: string = 'images/default-profile.png';
  @Input() username: string | null = null;
  @Output() logout = new EventEmitter<void>();
  constructor( private router:Router) {}

  onLogout() {
    this.logout.emit();
  }
}
