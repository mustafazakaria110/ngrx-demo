import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'lib-user-list-ui',
  standalone: true,
  imports: [CommonModule, GridModule, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListUiComponent {
  @Input() users: any;
  @Output() editUser = new EventEmitter<any>();
  @Output() deleteUser = new EventEmitter<any>();

  constructor(private router: Router) {}

  ngOnInit() {}

  onEditUser(userId: any) {
    this.editUser.emit(userId);
  }

  deleteUserPopup(userId: any) {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      this.deleteUser.emit(userId);
    }
  }

}
