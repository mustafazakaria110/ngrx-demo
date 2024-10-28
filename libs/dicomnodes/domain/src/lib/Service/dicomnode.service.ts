import { Injectable } from '@angular/core';
import { APIManager } from '@icode-tfs-ngrx-demo/util-common'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class DicomnodeService {
    constructor(private apiManager: APIManager) { }
    getDicomNodes(): Observable<any> {
        return this.apiManager.get('DicomNodes/getdicomnodes');
    }
}
