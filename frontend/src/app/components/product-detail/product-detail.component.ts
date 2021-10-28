import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cartItem';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService: ProductService, private router:ActivatedRoute, private cartService: CartService) { }

  product: Product = {
    "id" : 7,
    "sku" : "COUCHES-1007",
    "name" : "3 Seater Couch Volu Wild Whiskey Premium Leather",
    "description" : "This 3 seater Volu couch will be an absolute show stopper in your living room. Its sexy design and luxurious velvet fabrics set it apart from anything else you could possibly dream of.",
    "unitPrice" : 23.99,
    "imageUrl" : "assets/images/products/couches/COUCHES-1007.jpg",
    "active" : true,
    "unitsInStock" : 100,
    "dateCreated" : new Date(),
    "lastUpdated" : new Date()};

  ngOnInit(): void {
    this.router.paramMap.subscribe(()=>{
      this.handleProduct();
    });
  }


  handleProduct() {
    const productId = +this.router.snapshot.params.id;
    
    this.productService.getProduct(productId).subscribe(
      data=>{
        this.product = data;
    });
  }

  //Add product to customer cart.
  addToCart(){
    // this.cartService.saveToCart(product, this.customerService.getCustomerDetails());
    console.log(`${this.product.name} and price: ${this.product.unitPrice}`);
    const cartItem = new CartItem(this.product);
    this.cartService.saveToCart(cartItem);
    
  }

}


