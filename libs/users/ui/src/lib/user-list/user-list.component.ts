import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { Router, RouterModule } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { UserState } from '@icode-tfs-ngrx-demo/user-domain'
import { Observable } from 'rxjs';
import { CustomDaterangeComponent } from '@icode-tfs-ngrx-demo/util-date-range';

@Component({
  selector: 'lib-user-list-ui',
  standalone: true,
  imports: [CommonModule, GridModule, RouterModule,CustomDaterangeComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListUiComponent {
  users$ : Observable<any>;
  @Input() users: any;
  @Output() editUser = new EventEmitter<any>();
  @Output() viewDetails = new EventEmitter<number>();
  @Output() addUser = new EventEmitter<any>();
  @Output() deleteUser = new EventEmitter<any>();

  constructor(private router: Router, private store: Store<{ users: UserState }> , @Inject(DOCUMENT) private document: Document) {
    this.users$ = this.store.pipe(select(state => state.users.users));
  }

  ngOnInit() {}

  onEditUser(userId: any) {
    this.editUser.emit(userId);
  }
  onAddUser() {
    this.addUser.emit();
  }
  onViewUser(userId:number){
    this.viewDetails.emit(userId);
  }

  deleteUserPopup(userId: any) {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      this.deleteUser.emit(userId);
    }
  }

}
