import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';
import { Store } from '@ngrx/store';
import {
  deletepacsurlParameter,
  PacsurlParameterState,
} from '@icode-tfs-ngrx-demo/pacsurl-domain';

@Component({
  selector: 'lib-parameterlist-ui',
  standalone: true,
  imports: [CommonModule, RouterModule, GridModule],
  templateUrl: './parameterlistUi.component.html',
  styleUrl: './parameterlistUi.component.scss',
})
export class ParameterlistUiComponent {
  @Input() pacsParameterlist: any;
  @Input() parameterPacsId: any;
  @Output() editpacs = new EventEmitter<any>();
  @Output() deletepacs = new EventEmitter<any>();
  @Output() showParameter = new EventEmitter<any>();
  Selectedpacs: any;
  parameterComponent: boolean = false;
  constructor(
    private router: Router,
    private store: Store<{ pacsurlsParameter: PacsurlParameterState }>
  ) {}
  ngOnInit() {
    console.log(this.pacsParameterlist);
  }
  onEditpacs(parameterId: any) {
    debugger;
    this.router.navigate([`/editParmeter/${parameterId}`]);
  }

  deletePacsPopup(parameterId: any) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this pacs Parameter?'
    );
    if (confirmed) {
      //  this.deletepacs.emit(pacsId);
      this.store.dispatch(deletepacsurlParameter({ id: parameterId }));
    }
  }
  onShowParameter(pacsId: any) {
    this.showParameter.emit(pacsId);
    this.parameterComponent = true;
    this.Selectedpacs = pacsId;
  }
}
