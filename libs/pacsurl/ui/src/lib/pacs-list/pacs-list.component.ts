import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';
import { Router } from '@angular/router';
@Component({
  selector: 'lib-pacs-list',
  standalone: true,
  imports: [CommonModule,RouterModule,GridModule],
  templateUrl: './pacs-list.component.html',
  styleUrl: './pacs-list.component.scss',
})
export class PacsListComponent implements OnInit {
  @Input() pacslist: any;
  @Output() editpacs = new EventEmitter<any>();
  @Output() deletepacs = new EventEmitter<any>();
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
}
