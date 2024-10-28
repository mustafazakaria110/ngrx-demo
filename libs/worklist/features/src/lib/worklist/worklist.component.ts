import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorklistUiComponent } from '@icode-tfs-ngrx-demo/worklist-ui';

@Component({
  selector: 'lib-worklist-feature',
  standalone: true,
  imports: [CommonModule, WorklistUiComponent],
  templateUrl: './worklist.component.html',
  styleUrl: './worklist.component.scss',
})
export class WorklistComponent {}
