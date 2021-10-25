import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  productList: Product[] = [];
  currentCatagoryId?: number;
  priviousCatagoryId?: number;
  searchMode: boolean = false;

  paginationPageNumber: number = 1;
  paginationPageSize: number = 10;
  paginationTotalElements: number = 1;

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.listProducts();
    });
  }

  listProducts(){
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode)
    {this.handleSearchProduct();}
    else{this.handleListProduct();}
  }

  handleSearchProduct() {
    const keywordSearched: string = this.route.snapshot.params.keyword;
    this.productService.searchProduct(keywordSearched).subscribe(
      data=> this.productList = data
    );
  }

  handleListProduct(){
    //Check to see if category has id
    const hasCategoryId = this.route.snapshot.paramMap.has('id');    

    if (hasCategoryId) {
      //convert id to number
      this.currentCatagoryId = +this.route.snapshot.params.id;      
    }else{
      this.currentCatagoryId = 1;
    }
//Check if user has changed to a new category or not
    if(this.priviousCatagoryId != this.currentCatagoryId){
      this.paginationPageNumber = 1;
    }
    this.priviousCatagoryId = this.currentCatagoryId;
    // console.log(`current category id ${this.currentCatagoryId} and privoius category id ${this.priviousCatagoryId}`);
    // console.log(`pagination number ${this.paginationPageNumber}`);
    

    this.productService.getProductListPagination(--this.paginationPageNumber, this.paginationPageSize, this.currentCatagoryId)
      .subscribe(data=>this.handelPaginationData(data));
  }


  handelPaginationData(data: any): void {
    this.productList = data._embedded.products;
    //Spring counts page number from zero where as angular starts from one.
    this.paginationPageNumber = data.page.number + 1;
    this.paginationPageSize = data.page.size;
    this.paginationTotalElements = data.page.totalElements;
  }

  showPagination(): boolean{
    return this.paginationTotalElements >= 10;
  }
//Add product to customer cart.
  addToCart(product: Product){
    this.cartService.saveToCart(product, this.customerService.getCustomerDetails());
    console.log(`${product.name} and price: ${product.unitPrice}`);
    
  }

}
