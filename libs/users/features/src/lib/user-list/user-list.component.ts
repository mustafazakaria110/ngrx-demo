import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListUiComponent } from '@icode-tfs-ngrx-demo/user-ui';
import { GetUsers, UserState } from '@icode-tfs-ngrx-demo/user-domain'
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-user-list',
  standalone: true,
  imports: [CommonModule,RouterModule,UserListUiComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  constructor(private store: Store<{ user: UserState }>){

  }
  ngOnInit(): void {
    this.store.dispatch(GetUsers());
  }
}
