

import { Injectable } from '@angular/core';    
import { Observable } from 'rxjs';
import { APIManager } from '@icode-tfs-ngrx-demo/util-common'
@Injectable({
    providedIn: 'root',
})

export class UserService {
    constructor(private apiManager:APIManager) { }
    
    getUsers(): Observable<any> {
        return this.apiManager.get('users/getusers')      ;
      }
    getUserById(id:number):Observable<any>{
        return this.apiManager.get(`users/getbyid/${id}`)      ;
    }
}