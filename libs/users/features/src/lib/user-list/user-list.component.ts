import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListUiComponent } from '@icode-tfs-ngrx-demo/user-ui';

@Component({
  selector: 'lib-user-list',
  standalone: true,
  imports: [CommonModule,RouterModule,UserListUiComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  constructor(){

  }
 
}
