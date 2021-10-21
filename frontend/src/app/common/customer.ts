import { Address } from "./address";
import { ShoppingCart } from "./shoppingCart";

export class Customer{
    name: string | undefined;
    surname: string | undefined;
    email: string | undefined;
    address: Address | undefined;
    shoppingCart: ShoppingCart | undefined
}