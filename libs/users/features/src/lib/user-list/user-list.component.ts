import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserListUiComponent } from '@icode-tfs-ngrx-demo/user-ui';
import { GetUsers, GetUserById, UserState } from '@icode-tfs-ngrx-demo/user-domain'
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-user-list',
  standalone: true,
  imports: [CommonModule,RouterModule,UserListUiComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  constructor(private store: Store<{ user: UserState }>, private router:Router){

  }
  ngOnInit(): void {
    this.store.dispatch(GetUsers());
  }

  openAddPage = () =>
  {
debugger
    this.router.navigate(['/admin/adduser']);
  }
  

  openEditPage = (id:number) =>
    this.router.navigate([`admin/edituser/${id}`]);
  
}
