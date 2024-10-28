import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParameterComponent } from '@icode-tfs-ngrx-demo/pacsurl-ui';

@Component({
  selector: 'lib-persitparameter',
  standalone: true,
  imports: [CommonModule,ParameterComponent],
  templateUrl: './persistparameter.component.html',
  styleUrl: './persistparameter.component.scss',
})
export class PersitparameterComponent {}
