import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetUserById, persistUser, selectRouteParams, UserState }from'@icode-tfs-ngrx-demo/user-domain'
import { UserUiComponent } from '@icode-tfs-ngrx-demo/user-ui';
import { User } from 'libs/users/domain/src/lib/models/user-entity';
import { FormGroup } from '@angular/forms';
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
  saveUser(userForm:FormGroup){
    if(userForm.valid)
    {
      const user:User = userForm.value;      
      this.store.dispatch(persistUser({user}))
    }

  }
  
  
}
