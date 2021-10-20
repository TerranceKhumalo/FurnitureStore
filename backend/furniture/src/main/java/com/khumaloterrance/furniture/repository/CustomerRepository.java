package com.khumaloterrance.furniture.repository;

import com.khumaloterrance.furniture.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import javax.transaction.Transactional;

@CrossOrigin("http://localhost:4200")
@Transactional
public interface CustomerRepository extends CrudRepository<Customer, Long> {

    Customer findByEmail(@RequestParam("email") String email);

//    Customer save(Customer customer);

}
