import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productURl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{

    return this.httpClient.get<GetResponse>(this.productURl).pipe(
      map(respose=> respose._embedded.products)
    );
  }

  
}
interface GetResponse{
  _embedded: {
    products: Product[];
  }
}