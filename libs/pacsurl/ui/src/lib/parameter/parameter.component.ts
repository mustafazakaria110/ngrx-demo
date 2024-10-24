import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { addpacsurl, editpacsurl,selectPacsById,PacsurlState } from '@icode-tfs-ngrx-demo/pacsurl-domain';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-parameter',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './parameter.component.html',
  styleUrl: './parameter.component.scss',
})
export class ParameterComponent implements OnInit{
  @Input() parameterPacsId: any;
  PacsForm: FormGroup;
  isEdit = false; 
  pacsid: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ pacsurls: PacsurlState }>
  ) {
    this.PacsForm = this.fb.group({
      name: ['', Validators.required],
      url: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pacsid = params['id'];
      if (this.pacsid) {
        this.isEdit = true;  
        this.loadUserData(this.pacsid);  
      }
    });

  }
  
  loadUserData(pacsId: number) {
    this.store.select(selectPacsById(pacsId)).subscribe(pacsurl => {
      if (pacsurl) {
        this.PacsForm.patchValue(pacsurl);
      }
    });
  }

  onSubmit() {
    if (this.PacsForm.valid) {
      const pacsData = {
        ...this.PacsForm.value,
        id: this.isEdit ? this.pacsid : new Date().getTime()
      };

      if (this.isEdit) {
        this.store.dispatch(editpacsurl({ pacsurl: pacsData }));
      } else {
        this.store.dispatch(addpacsurl({ pacsurl: pacsData }));
      }
  
      this.router.navigate(['/pacs']); 
    }
  }

  onCancel() {
    this.router.navigate(['/pacs']); 
  }
}
