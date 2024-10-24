import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';
import { Router } from '@angular/router';
import { ParameterComponent } from '../parameter/parameter.component';
@Component({
  selector: 'lib-pacs-list',
  standalone: true,
  imports: [CommonModule,RouterModule,GridModule,ParameterComponent],
  templateUrl: './pacs-list.component.html',
  styleUrl: './pacs-list.component.scss',
})
export class PacsListComponent implements OnInit {
  @Input() pacslist: any;
  @Output() editpacs = new EventEmitter<any>();
  @Output() deletepacs = new EventEmitter<any>();
  @Output() showParameter = new EventEmitter<any>();
  Selectedpacs:any;
parameterComponent:boolean=false;
  constructor(private router: Router) {}
  ngOnInit() {
    debugger
    console.log(this.pacslist)
  }
  onEditpacs(pacsId: any) {
    this.editpacs.emit(pacsId);
  }

  deletePacsPopup(pacsId: any) {
    const confirmed = window.confirm('Are you sure you want to delete this pacs?');
    if (confirmed) {
      this.deletepacs.emit(pacsId);
    }
  }
  onShowParameter(pacsId: any) {
    debugger
    //this.showParameter.emit(pacsId);
    this.parameterComponent=true;
    this.Selectedpacs=pacsId;
  }
}
