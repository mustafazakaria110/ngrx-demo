import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
@Component({
  selector: 'lib-dicomnode-ui',
  standalone: true,
  imports: [CommonModule, GridModule, DropDownListModule],
  templateUrl: './dicomnode-ui.component.html',
  styleUrl: './dicomnode-ui.component.scss',
})
export class DicomnodeUiComponent {
  dicomNodes$: any;
  constructor(private store: Store<{ dicomNodes: any }>) {
    this.dicomNodes$ = this.store.pipe(select(state => state.dicomNodes.dicomNodes));
  }
}
