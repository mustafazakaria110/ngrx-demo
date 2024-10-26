

import { Injectable } from '@angular/core';    
import { Observable } from 'rxjs';
import { APIManager } from '@icode-tfs-ngrx-demo/util-common'
@Injectable({
    providedIn: 'root',
})

export class UserService {
    constructor(private apiManager:APIManager) { }
    
    getUsers(): Observable<any> {
        debugger
        return this.apiManager.get('users/getusers')      ;
      }
}