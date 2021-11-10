package com.khumaloterrance.furniture.dto;

import com.khumaloterrance.furniture.entity.Address;
import com.khumaloterrance.furniture.entity.Customer;
import com.khumaloterrance.furniture.entity.ItemToPurchase;
import com.khumaloterrance.furniture.entity.Order;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;
    private Address shippingAddress;
    private Order order;
    private Set<ItemToPurchase> itemsToPurchase;
}
