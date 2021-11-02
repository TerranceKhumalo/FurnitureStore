package com.khumaloterrance.furniture.restController;


import com.khumaloterrance.furniture.entity.Customer;
import com.khumaloterrance.furniture.entity.Product;
import com.khumaloterrance.furniture.entity.ShoppingCart;
import com.khumaloterrance.furniture.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;

@RepositoryRestController
public class CustomerController {

    private final CustomerRepository repository;

    @Autowired
    public CustomerController(CustomerRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/customers/save")
    public ResponseEntity<Customer> saveCustomerWithCart(@RequestBody Customer customer){
        Customer customerInDatabase =  repository.findByEmail(customer.getEmail());
        if(customerInDatabase == null){
            ShoppingCart shoppingCart = new ShoppingCart();
            customer.setShoppingCart(shoppingCart);
            return ResponseEntity.ok(this.repository.save(customer));
        }
        return ResponseEntity.ok(customer);
    }

    @PostMapping("/customers/{email}/cart")
    @Transactional
    public Customer saveToCart(@PathVariable String email, @RequestBody Product productsInCart){
        Customer customerAddToCart = repository.findByEmail(email);
        if(customerAddToCart != null){
            customerAddToCart.getShoppingCart();
            this.repository.save(customerAddToCart);

        }

        return customerAddToCart;
    }
}
