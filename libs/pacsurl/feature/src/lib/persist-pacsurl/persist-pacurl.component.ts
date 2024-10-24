import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { addpacsurl, editpacsurl,selectPacsById,PacsurlState } from '@icode-tfs-ngrx-demo/pacsurl-domain';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
  pacsid: number | null = null;
  editedpacs:any

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
        this.loadPacsData(this.pacsid);  
      }
    });

  }
  
  loadPacsData(pacsId: number) {
    this.store.select(selectPacsById(pacsId)).subscribe(pacsurl => {
      if (pacsurl) {
        this.editedpacs=pacsurl;
        this.PacsForm.patchValue(pacsurl);
      }
    });
  }

  onSubmit() {
    
    if (this.PacsForm.valid) {
      const pacsData = {
        ...this.PacsForm.value,
       
      };

      if (this.isEdit) {
        debugger
        pacsData.id=  this.pacsid;
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

