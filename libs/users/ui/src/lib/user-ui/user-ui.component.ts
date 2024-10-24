import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-user-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-ui.component.html',
  styleUrl: './user-ui.component.scss',
})
export class UserUiComponent {}
