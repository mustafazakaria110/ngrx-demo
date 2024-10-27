import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserListUiComponent } from '@icode-tfs-ngrx-demo/user-ui';
import { GetUsers, GetUserById, UserState, ResetDetailsMode } from '@icode-tfs-ngrx-demo/user-domain'
import { Store } from '@ngrx/store';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { UserPersistComponent } from '../user-persist/user-persist.component';
import { async, Observable } from 'rxjs';

@Component({
  selector: 'lib-user-list',
  standalone: true,
  imports: [CommonModule,RouterModule,UserListUiComponent,DialogModule,UserPersistComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  detailsPageMode$:Observable<any>;
  constructor(private store: Store<{ users: UserState }>, private router:Router){
    this.detailsPageMode$ = this.store.select(x=>x.users.detailsPageMode)
  }

  ngOnInit(): void {
    this.store.dispatch(GetUsers());
  }
  openAddPage = () =>  
  {
    this.store.dispatch(GetUserById({id : 0 , mode:"add"}));
    this.router.navigate(['/admin/adduser']);
  }
  openEditPage = (id:number) =>
  {
    this.store.dispatch(GetUserById({id : id, mode:"edit"}));
    this.router.navigate([`admin/edituser/${id}`]);
  }
  viewDetails = (id:number) =>  {
    this.store.dispatch(GetUserById({id : id, mode:"view"}));
  }
  closeDetailsPopup(){
    this.store.dispatch(ResetDetailsMode());
  }
}
