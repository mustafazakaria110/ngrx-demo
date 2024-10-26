

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';    
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})

export class APIManager {
    apiUrl:string | undefined; // Replace with your API URL
    constructor(private http: HttpClient) { 
        this.apiUrl = 'http://localhost:52151/api'
    }
    
    public post(url2:string, data: any): Observable<any> {
        const body = JSON.stringify(data);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        let url = `${this.apiUrl}/${url2}`;
        return this.http.post(url, body, { headers })          ;
      }
    public get(url2:string): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        let url = `${this.apiUrl}/${url2}`;
        return this.http.get(url, { headers })          ;
      }
}