import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'worklist-ui',
  standalone: true,
  imports: [CommonModule, GridModule, RouterModule],
  templateUrl: './worklist-ui.component.html',
  styleUrl: './worklist-ui.component.scss',
})
export class WorklistUiComponent {}
