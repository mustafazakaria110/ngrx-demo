import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from 'libs/users/domain/src/lib/models/user-entity';

@Component({
  selector: 'user-details-ui',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './user-ui.component.html',
  styleUrl: './user-ui.component.scss',
})
export class UserUiComponent {

  @Input() user!:User
  userForm!: FormGroup;
  @Output() submitPersistUser = new EventEmitter<FormGroup>();
  @Input() isEdit!:boolean; 

  constructor(
    private router: Router,
    private fb:FormBuilder
  ) {
    this.userForm = this.fb.group({
      id:[0],
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit() {
    this.submitPersistUser.emit(this.userForm);
  }
  onCancel(){
    this.router.navigate([`/admin/users`]); 
  }
}
