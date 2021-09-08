import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// export class HelloBean{
//   constructor(public message: string){}
// }

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  // private homeUrl = 'http://localhost:8080/home';

  constructor(private http: HttpClient) { }

  getHomePage(){
    return this.http.get<string>('http://localhost:8080/home');
  }
}
