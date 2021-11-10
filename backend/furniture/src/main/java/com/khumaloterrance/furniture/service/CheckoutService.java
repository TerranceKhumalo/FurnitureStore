package com.khumaloterrance.furniture.service;

import com.khumaloterrance.furniture.dto.Purchase;
import com.khumaloterrance.furniture.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
