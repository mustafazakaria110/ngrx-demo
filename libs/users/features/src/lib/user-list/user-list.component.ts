import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserListUiComponent } from '@icode-tfs-ngrx-demo/user-ui';
import {
  GetUsers,
  SaveGridState,
  GetUserById,
  UserState,
  ResetDetailsMode,
  deleteUser,
} from '@icode-tfs-ngrx-demo/user-domain';
import { select, Store } from '@ngrx/store';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { UserPersistComponent } from '../user-persist/user-persist.component';
import { async, Observable } from 'rxjs';
import { process } from '@progress/kendo-data-query';
import { User } from 'libs/users/domain/src/lib/models/user-entity';

@Component({
  selector: 'lib-user-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    UserListUiComponent,
    DialogModule,
    UserPersistComponent,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  detailsPageMode$: Observable<any>;
  gridState: any;
  users: any;
  constructor(
    private store: Store<{ users: UserState }>,
    private router: Router
  ) {
    this.detailsPageMode$ = this.store.select((x) => x.users.detailsPageMode);
  }

  ngOnInit(): void {
    this.store.dispatch(GetUsers());
    let users$ = this.store.pipe(select((state) => state.users.users));
    let gridSetting$ = this.store.pipe(
      select((state) => state.users.gridState)
    );
    users$.subscribe((users) => {
      this.users = users.map(user => ({
        ...user,                 
        created: user.created ? new Date(user.created) : null   // Convert 'created' to a Date object
      }));
    });
    gridSetting$.subscribe((x) => (this.gridState = x));
  } 
  openAddPage = () => {
    this.store.dispatch(GetUserById({ id: 0, mode: 'add' }));
    this.router.navigate(['/admin/adduser']);
  };
  openEditPage = (id: number) => {
    this.store.dispatch(GetUserById({ id: id, mode: 'edit' }));
    this.router.navigate([`admin/edituser/${id}`]);
  };
  viewDetails = (id: number) => {
    this.store.dispatch(GetUserById({ id: id, mode: 'view' }));
  };
  closeDetailsPopup() {
    this.store.dispatch(ResetDetailsMode());
  }
  deleteUser(userid: number) {
    this.store.dispatch(deleteUser({ id: userid }));
  }
  saveGridState(gridState: any) {
    this.store.dispatch(SaveGridState({ gridState: gridState }));
  }
}
