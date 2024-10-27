

import { Injectable } from '@angular/core';    
import { Observable } from 'rxjs';
import { APIManager } from '@icode-tfs-ngrx-demo/util-common'
import { User } from '../models/user-entity';
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
    persistUser(user:User):Observable<any>{
        return (user.id>0) ?this.apiManager.post(`users/update`,user)
        :this.apiManager.post(`users/add`,user)      ;
    }
    deleteUser(id:number):Observable<any>{
        return this.apiManager.delete(`users/delete/${id}`)      ;
    }
}