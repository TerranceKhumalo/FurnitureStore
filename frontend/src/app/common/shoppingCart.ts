import { Customer } from "./customer";
import { Product } from "./product";

export class ShoppingCart {
    productQuantity: number = 0;
    products: Product[] | undefined;
    customer: Customer | undefined;

    setProductQuantity(newPeoductQuantity: number){
        this.productQuantity = newPeoductQuantity;
    }

    addProducts(newItem: Product){
        this.products?.push(newItem);
    }
}