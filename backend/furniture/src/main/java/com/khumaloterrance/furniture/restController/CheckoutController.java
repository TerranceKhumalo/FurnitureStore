package com.khumaloterrance.furniture.restController;


import com.khumaloterrance.furniture.dto.Purchase;
import com.khumaloterrance.furniture.dto.PurchaseResponse;
import com.khumaloterrance.furniture.service.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class CheckoutController {

    @Autowired
    private CheckoutService checkoutService;

    @PostMapping("/api/checkout/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase){
        return checkoutService.placeOrder(purchase);
    }

}
