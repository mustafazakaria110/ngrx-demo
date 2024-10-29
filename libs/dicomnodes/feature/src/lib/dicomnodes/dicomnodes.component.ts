import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DicomNodeState, GetDicomNodes } from '@icode-tfs-ngrx-demo/dicomnode-domain';
import { DicomnodeUiComponent } from '@icode-tfs-ngrx-demo/dicomnode-ui'
@Component({
  selector: 'app-dicomnodes',
  templateUrl: './dicomnodes.component.html',
  styleUrls: ['./dicomnodes.component.scss'],
  standalone: true,
  imports: [DicomnodeUiComponent]
})
export class DicomnodesComponent implements OnInit {

  constructor(private store: Store<{ dicomNodes: DicomNodeState }>) { }

  ngOnInit() {
    this.store.dispatch(GetDicomNodes())

  }

}
