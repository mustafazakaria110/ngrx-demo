import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadpacsurl, addpacsurl, editpacsurl, deletepacsurl, PacsurlState } from '@icode-tfs-ngrx-demo/pacsurl-domain';
import { Router, RouterModule } from '@angular/router';
import {PacsListComponent} from '@icode-tfs-ngrx-demo/pacsurl-ui'


@Component({
  selector: 'lib-pacsurl-list',
  standalone: true,
  imports: [CommonModule,RouterModule,PacsListComponent],
  templateUrl: './pacsurlList.component.html',
  styleUrl: './pacsurlList.component.scss',
})
export class PacsurlListComponent implements OnInit{

  pacsurls$: Observable<any> | undefined;

  constructor(private store: Store<{ pacsurls: PacsurlState }>,private router: Router,) {
  }
  ngOnInit(): void {
    debugger
    this.pacsurls$ = this.store.select(state => state.pacsurls.pacsurls);
    this.store.dispatch(loadpacsurl());

  }
  handleEditpacs(user: any) {
    this.router.navigate([`/admin/editpacs/${user}`]); 
  }

  handleDeleteUser(userId: number) {
    this.store.dispatch(deletepacsurl({ id: userId }));
  }
}
