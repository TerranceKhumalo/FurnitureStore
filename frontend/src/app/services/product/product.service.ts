import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productURl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{

    return this.httpClient.get<GetResponse[]>(this.productURl);
  }
}
