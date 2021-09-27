import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  productList!: Product[];
  currentCatagoryId?: number;
  searchMode: boolean = false;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

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
    this.productService.getProductList(this.currentCatagoryId).subscribe(
      data=> {this.productList = data}
    )
  }

}
