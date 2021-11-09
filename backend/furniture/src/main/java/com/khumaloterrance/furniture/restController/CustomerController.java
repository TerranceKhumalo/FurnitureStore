package com.khumaloterrance.furniture.restController;


import com.khumaloterrance.furniture.entity.Customer;
import com.khumaloterrance.furniture.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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
            return ResponseEntity.ok(this.repository.save(customer));
        }
        return ResponseEntity.ok(customer);
    }

}
