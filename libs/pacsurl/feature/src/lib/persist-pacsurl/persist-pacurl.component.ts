import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { addpacsurl, editpacsurl, PacsurlState } from '@icode-tfs-ngrx-demo/pacsurl-domain';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-persist-pacsurl',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './persist-pacurl.component.html',
  styleUrl: './persist-pacurl.component.scss',
})
export class PersistPacsurlComponent implements OnInit
 { 
  PacsForm: FormGroup;
  isEdit = false; // Flag to determine if it's edit mode
  userId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ user: PacsurlState }>
  ) {
    this.PacsForm = this.fb.group({
      name: ['', Validators.required],
      url: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      if (this.userId) {
        this.isEdit = true;  
       // this.loadUserData(this.userId);  
      }
    });

  }
  
  loadUserData(userId: number) {
    // this.store.select(selectPacsurlById(userId)).subscribe(pacsurl => {
    //   if (user) {
    //     this.PacsForm.patchValue(user);
    //   }
    // });
  }

  onSubmit() {
    if (this.PacsForm.valid) {
      const userData = {
        ...this.PacsForm.value,
        id: this.isEdit ? this.userId : new Date().getTime()
      };

      if (this.isEdit) {
        this.store.dispatch(editpacsurl({ pacsurl: userData }));
      } else {
        this.store.dispatch(addpacsurl({ pacsurl: userData }));
      }
  
      this.router.navigate(['/users']); 
    }
  }

  onCancel() {
    this.router.navigate(['/users']); 
  }
}

