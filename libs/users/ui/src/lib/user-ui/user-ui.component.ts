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
  styleUrls: ['./user-ui.component.scss'],
})
export class UserUiComponent {

  @Input() user!:User
  userForm!: FormGroup;
  @Output() submitPersistUser = new EventEmitter<FormGroup>();
  @Output() onCancel = new EventEmitter<boolean>();
  @Input() pageMode:string="edit"; 
  roles:{id:number,name:string}[]=[{ id: 1, name:'admin'}, { id: 2, name:'User'}]
  pagemode$: any;
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
    this.pagemode$ = this.store.select(x=>x.users.detailsPageMode)
    this.pagemode$.subscribe((x: string)=>{
      if (x=='view')
        this.userForm.disable();
    })
    this.store.select(s=>s.users.selectedUser).subscribe(u=>{
      if(u!=null)
      {
        this.userForm.patchValue(u);   
        this.userForm.disable();   
      }
    })
  }
  onSubmit() {
    this.submitPersistUser.emit(this.userForm);
  }
  cancleClicked(){
    this.onCancel.emit()
  }
}
