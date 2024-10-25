

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';    
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})

export class AuthService {
    private apiUrl = 'http://localhost:52151/api'; // Replace with your API URL
    constructor(private http: HttpClient) { }
    
    // GET Request
    authenticate(data: any): Observable<any> {
        const body = JSON.stringify(data);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        let url = `${this.apiUrl}/Authentication/login`;
        return this.http.post(url, body, { headers })          ;
      }
}