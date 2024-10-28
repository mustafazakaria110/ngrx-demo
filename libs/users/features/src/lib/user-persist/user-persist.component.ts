import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetUserById, persistUser, ResetDetailsMode, selectRouteParams, UserState }from'@icode-tfs-ngrx-demo/user-domain'
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
export class UserPersistComponent implements OnInit{
  constructor(private store: Store<{ users: UserState }>,
    private router: Router,
  ){
    
   
  }
  ngOnInit(): void {
    this.store.select(x=>x.users.detailsPageMode).subscribe((x: any)=>{
      if (x ==null)
      {
        this.store.select(selectRouteParams).subscribe(params => {
          let userid = Number(params['id'])
          this.store.dispatch(GetUserById({id : userid, mode:userid>0?"edit":"add"}));
        });
      }
    })
  }
  saveUser(userForm:FormGroup){
    if(userForm.valid)
    {
      const user:User = userForm.value;      
      this.store.dispatch(persistUser({user}))
    }

  } 
  cancel(){
    this.router.navigate([`/admin/users`]); 
    this.store.dispatch(ResetDetailsMode())
  }
  
}
