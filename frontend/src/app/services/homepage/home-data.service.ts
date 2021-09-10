import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constents';

export class HelloBean{
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root',
})
export class HomeDataService {

  constructor(private http: HttpClient) {}

  getHomePage() {
    return this.http.get<string>(`${API_URL}/home`);
  }

  createBasicAuthHeader() {
    let username = 'user';
    let password = 'password';
    
    let basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthString;
  }
}
