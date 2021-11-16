package com.khumaloterrance.furniture.repository;

import com.khumaloterrance.furniture.entity.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Long> {

    Customer findByEmail(String email);

//    Customer save(Customer customer);

}
