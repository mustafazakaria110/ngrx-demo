import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParameterComponent} from '@icode-tfs-ngrx-demo/pacsurl-ui'

@Component({
  selector: 'lib-parameterlist',
  standalone: true,
  imports: [CommonModule,ParameterComponent],
  templateUrl: './paramaterlist.component.html',
  styleUrl: './paramaterlist.component.scss',
})
export class ParameterlistComponent {
  @Input() parameterPacsId: any;
  parameterComponent:boolean=false;
 
}
