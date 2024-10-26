
import { Injectable } from '@angular/core';    
import { Observable } from 'rxjs';
import { APIManager } from '@icode-tfs-ngrx-demo/util-common'
@Injectable({
    providedIn: 'root',
})

export class AuthService {
    constructor(private apiManager:APIManager) { }
    
    authenticate(data: any): Observable<any> {
        return this.apiManager.post('authentication/login',data)      ;
      }
}