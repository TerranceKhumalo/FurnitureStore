import { Address } from "./address";
import { Customer } from "./customer";
import { ItemToPurchase } from "./item-to-purchase";
import { Order } from "./order";

export class Purchase {
    customer: Customer | undefined;
    shippingAddress: Address | undefined;
    order: Order | undefined;
    itemsToPurchase: ItemToPurchase[] | undefined;
  orderTrackingNumber: any;
}
