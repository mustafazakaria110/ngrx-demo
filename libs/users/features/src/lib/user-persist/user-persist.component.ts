import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-user-persist',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './user-persist.component.html',
  styleUrl: './user-persist.component.scss',
})
export class UserPersistComponent {}