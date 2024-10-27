import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from 'libs/users/domain/src/lib/models/user-entity';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { UserState } from '@icode-tfs-ngrx-demo/user-domain';
import { Store } from '@ngrx/store';

@Component({
  selector: 'user-details-ui',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule,DropDownsModule],
  templateUrl: './user-ui.component.html',
  styleUrl: './user-ui.component.scss',
})
export class UserUiComponent {

  @Input() user!:User
  userForm!: FormGroup;
  @Output() submitPersistUser = new EventEmitter<FormGroup>();
  @Input() isEdit!:boolean; 
  roles:{id:number,name:string}[]=[{ id: 1, name:'admin'}, { id: 2, name:'User'}]
  constructor(
    private router: Router,
    private fb:FormBuilder,
    private store: Store<{ users: UserState }>
  ) {
    this.userForm = this.fb.group({
      id:[0],
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userRole: [null, Validators.required],
      pacsUserName: [null],
      risUserId:[null],
      isActive: [true, Validators.required],
      institutionId:[null]
    });
    this.store.select(s=>s.users.selectedUser).subscribe(u=>{
      if (u!==null)
      {
        this.userForm.patchValue(u);
       // this.userForm.get('userRole')?.patchValue(this.roles.find(r=>r.id == u.userRole));
      }
    })
  }
  onSubmit() {
    this.submitPersistUser.emit(this.userForm);
  }
  onCancel(){
    this.router.navigate([`/admin/users`]); 
  }
}
