import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetUserById, selectRouteParams, UserState }from'@icode-tfs-ngrx-demo/user-domain'
import { UserUiComponent } from '@icode-tfs-ngrx-demo/user-ui';
@Component({
  selector: 'lib-user-persist',
  standalone: true,
  imports: [CommonModule,RouterModule,UserUiComponent],
  templateUrl: './user-persist.component.html',
  styleUrl: './user-persist.component.scss',
})
export class UserPersistComponent implements OnInit {
  constructor(private store: Store<{ user: UserState }>){
    
   
  }
  ngOnInit(): void {
    this.store.select(selectRouteParams).subscribe(params => {
      this.store.dispatch(GetUserById({id : Number(params['id'])}));
    });

  }
  
  
}
