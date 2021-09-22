import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  private productURl = 'http://localhost:8080/api/products';
  private categoryURL = 'http://localhost:8080/api/product-category';

  constructor(private httpClient: HttpClient) { }

  getProductList(categoryId: number): Observable<Product[]>{

    const seachURL = `${this.productURl}/search/findByCategoryId?id=${categoryId}`    

    return this.httpClient.get<GetResponseProduct>(seachURL).pipe(
      map(respose=> respose._embedded.products)
    );
  }

  getProductCategoryList(): Observable<ProductCategory[]>{

    return this.httpClient.get<GetResponseProductCategory>(this.categoryURL).pipe(
      map(respose=> respose._embedded.productCategory)
    );
  }

  
}
interface GetResponseProduct{
  _embedded: {
    products: Product[];
  }
}

interface GetResponseProductCategory{
  _embedded: {
    productCategory: ProductCategory[];
  }
}