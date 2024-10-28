import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  loadpacsurl,
  addpacsurl,
  editpacsurl,
  deletepacsurl,
  PacsurlState,
  PacsurlParameterState,
} from '@icode-tfs-ngrx-demo/pacsurl-domain';
import { Router, RouterModule } from '@angular/router';
import {
  PacsListComponent,
  ParameterlistUiComponent,
} from '@icode-tfs-ngrx-demo/pacsurl-ui';

@Component({
  selector: 'lib-pacsurl-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PacsListComponent,
    ParameterlistUiComponent,
  ],
  templateUrl: './pacsurlList.component.html',
  styleUrl: './pacsurlList.component.scss',
})
export class PacsurlListComponent implements OnInit {
  pacsurls$: Observable<any> | undefined;
  parameterPacsId: any;
  showParameterComponent: boolean = false;
  pacsurlsParameter$: Observable<any> | undefined;

  constructor(
    private store: Store<{ pacsurls: PacsurlState }>,
    private store2: Store<{ pacsurlsParameter: PacsurlParameterState }>,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.pacsurls$ = this.store.select((state) => state.pacsurls.pacsurls);
    this.pacsurls$.subscribe((pacs) => {
      console.log(pacs);
    });
    //this.store.dispatch(loadpacsurl());
  }
  handleEditpacs(pacs: any) {
    this.router.navigate([`/editpacs/${pacs}`]);
  }

  handleDeleteUser(pacsId: number) {
    this.store.dispatch(deletepacsurl({ id: pacsId }));
  }
  handleshowparameter(pacs: any) {
    debugger;
    this.showParameterComponent = true;
    this.parameterPacsId = pacs;
    this.pacsurlsParameter$ = this.store2.select((state) =>
      state.pacsurlsParameter.pacsurlsParameter.filter(
        (i) => i.pacsid == this.parameterPacsId
      )
    );
  }
}
