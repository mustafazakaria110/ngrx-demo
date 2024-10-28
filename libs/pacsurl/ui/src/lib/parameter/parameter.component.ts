import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  addpacsurl,
  editpacsurl,
  selectPacsById,
  PacsurlState,
  editpacsurlParameter,
  addpacsurlParameter,
  selectPacsParameterById,
  PacsurlParameterState,
} from '@icode-tfs-ngrx-demo/pacsurl-domain';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-parameter',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './parameter.component.html',
  styleUrl: './parameter.component.scss',
})
export class ParameterComponent implements OnInit {
  @Input() parameterPacsId: any;
  ParameterPacsForm: FormGroup;
  isEdit = false;
  pacsParameterid: number | null = null;
  editedparameter: any;
  pacsid: number | null = null;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ pacsurlsParameter: PacsurlParameterState }>
  ) {
    this.ParameterPacsForm = this.fb.group({
      name: ['', Validators.required],
      url: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      debugger;
      this.pacsParameterid = params['id'];
      if (this.pacsParameterid) {
        this.isEdit = true;
        this.loadUserData(this.pacsParameterid);
      } else {
        this.pacsid = params['pacsid'];
      }
    });
  }

  loadUserData(parameterid: number) {
    debugger;
    this.store
      .select(selectPacsParameterById(parameterid))
      .subscribe((param) => {
        if (param) {
          debugger;
          this.editedparameter = param;
          this.pacsid = param.pacsid;
          this.ParameterPacsForm.patchValue(param);
        }
      });
  }

  onSubmit() {
    if (this.ParameterPacsForm.valid) {
      const parameterData = {
        ...this.ParameterPacsForm.value,
        id: this.isEdit ? this.pacsParameterid : new Date().getTime(),
        pacsid: this.pacsid,
      };
      debugger;
      if (this.isEdit) {
        this.store.dispatch(
          editpacsurlParameter({ pacsurlParameter: parameterData })
        );
      } else {
        this.store.dispatch(
          addpacsurlParameter({ pacsurlParameter: parameterData })
        );
      }

      this.router.navigate(['/pacs']);
    }
  }

  onCancel() {
    this.router.navigate(['/pacs']);
  }
}
