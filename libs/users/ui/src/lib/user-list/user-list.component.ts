import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { Router, RouterModule } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { UserState } from '@icode-tfs-ngrx-demo/user-domain';
import { Observable, of } from 'rxjs';
import { CustomDaterangeComponent } from '@icode-tfs-ngrx-demo/util-date-range';
import { process, DataResult, State } from '@progress/kendo-data-query';
import moment, { Moment } from "moment";
import dayjs , { Dayjs}  from 'dayjs';

@Component({
  selector: 'lib-user-list-ui',
  standalone: true,
  imports: [CommonModule, GridModule, RouterModule,CustomDaterangeComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListUiComponent implements OnChanges {
  @Input() users: any[] = [];
  @Input() gridState: any;
  @Output() editUser = new EventEmitter<any>();
  @Output() viewDetails = new EventEmitter<number>();
  @Output() addUser = new EventEmitter<any>();
  @Output() deleteUser = new EventEmitter<any>();
  @Output() gridStateChanged = new EventEmitter<any>();
  gridData: { data: any; total: number } | undefined = { data: [], total: 0 };
  public state: State = {
    skip: 0,
    take: 10,
    // Additional settings such as sorting, filtering, etc.
  };

  constructor(private router: Router) {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['users'] || changes['gridState']) {
      if (this.users && this.gridState)
        this.gridData = process(this.users, this.gridState);
      else {
        this.gridData!.data = this.users;
        this.gridData!.total = this.users.length;
      }
    }
  }

  getDateRangeDefaultValue(){
    var timeRange  :null | {startDate?:Dayjs|null, endDate?:Dayjs|null}= null;
    if(this.gridState)
    {
      var t= this.gridState?.filter?.filters?.filter((f:any)=>f.field=='created');
      if(t && t.length>0)
        {
          const startItem = t.find((f: any) => f.operator === 'gte').value;
          const endItem = t.find((f: any) => f.operator === 'lte').value;
          timeRange = {
            startDate: startItem ? startItem: null,
            endDate: endItem ? endItem : null
          };
        }
      }
    console.log(timeRange)
  return timeRange;
  }
  selectedDateRange:any;
  ngOnInit() {
    this.selectedDateRange = this.getDateRangeDefaultValue();
  }

  onEditUser(userId: any) {
    this.editUser.emit(userId);
  }
  onAddUser() {
    this.addUser.emit();
  }
  onViewUser(userId: number) {
    this.viewDetails.emit(userId);
  }

  deleteUserPopup(userId: any) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this user?'
    );
    if (confirmed) {
      this.deleteUser.emit(userId);
    }
  }
  onStateChange(state: any) {
    this.gridStateChanged.emit(state);
  }
}
