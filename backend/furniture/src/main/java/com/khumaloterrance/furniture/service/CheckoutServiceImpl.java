package com.khumaloterrance.furniture.service;

import com.khumaloterrance.furniture.dto.Purchase;
import com.khumaloterrance.furniture.dto.PurchaseResponse;
import com.khumaloterrance.furniture.entity.Customer;
import com.khumaloterrance.furniture.entity.ItemToPurchase;
import com.khumaloterrance.furniture.entity.Order;
import com.khumaloterrance.furniture.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService{

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {

        Order order = purchase.getOrder();
        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        //get items to purchase and add items in order
        Set<ItemToPurchase> itemsToPurchase = purchase.getItemsToPurchase();
        itemsToPurchase.forEach(item -> order.add(item));

        order.setShippingAddress(purchase.getShippingAddress());

        //Set customer who placed the order.
        Customer customer = purchase.getCustomer();
        //Check if customer is already in the database or not
         Customer customerExistInDB= this.customerRepository.findByEmail(customer.getEmail());
         
         if(customerExistInDB != null){
             customer = customerExistInDB;
         }
        customer.add(order);

        //save customer to the database
        customerRepository.save(customer);

        return new PurchaseResponse(orderTrackingNumber);
    }

    //Generate universally unique identifier as a tracking number.
    private String generateOrderTrackingNumber() {
        return UUID.randomUUID().toString();
    }
}
