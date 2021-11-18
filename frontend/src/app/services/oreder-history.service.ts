import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OderHistory } from '../common/oder-history';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  // 
  private oderUrl = 'http://localhost:8080/api/orders';

  constructor(private http:HttpClient) { }

  getOderHistory(email: string):Observable<GetOderHistoryResponse>{
    return this.http.get<GetOderHistoryResponse>(`${this.oderUrl}/search/findByCustomerEmailOrderByDateCreatedDesc?email=${email}`);
  }
}

interface GetOderHistoryResponse{
  _embedded: {
    orders: OderHistory[]
  }
}