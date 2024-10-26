import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'user-details-ui',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './user-ui.component.html',
  styleUrl: './user-ui.component.scss',
})
export class UserUiComponent {

  @Input() userForm!: FormGroup;
  @Output() submitPersistUser = new EventEmitter<any>();
  @Input() isEdit!:boolean; 

  constructor(
    private router: Router
  ) {
    // this.userForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    // });
  }
  onSubmit() {
    this.submitPersistUser.emit();
  }
  onCancel(){
    this.router.navigate([`/admin/users`]); 
  }
}
