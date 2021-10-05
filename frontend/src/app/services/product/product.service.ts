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

    return this.getProducts(seachURL);
  }
//Get pagination products
  getProductListPagination(page:number, size:number, categoryId: number): Observable<Product[]>{

    // const seachURL = `${this.productURl}/search/findByCategoryId?id=${categoryId}`;
    const paginationURL = `${this.productURl}/search/findByCategoryId?id=${categoryId}&page=${page}&size=${size}`; 

    return this.getProducts(paginationURL);
  }

  searchProduct(keywordSearched: string): Observable<Product[]> {
    const searchByNameURL: string = `${this.productURl}/search/findByNameContaining?name=${keywordSearched}`

    return this.getProducts(searchByNameURL);
  }

  private getProducts(searchURL: string):Observable<Product[]>{
    return this.httpClient.get<GetResponseProduct>(searchURL).pipe(
      map(response=> response._embedded.products)
    );
  }

  getProductCategoryList(): Observable<ProductCategory[]>{

    return this.httpClient.get<GetResponseProductCategory>(this.categoryURL).pipe(
      map(respose=> respose._embedded.productCategory)
    );
  }

  getProduct(productId: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.productURl}/${productId}`);
  }
  
}
interface GetResponseProduct{
  _embedded: {
    products: Product[];
  },
  page : {
    size : number,
    totalElements : number,
    totalPages : number,
    number : number
  }
}

interface GetResponseProductCategory{
  _embedded: {
    productCategory: ProductCategory[];
  }
}