package com.khumaloterrance.furniture.repository;

import com.khumaloterrance.furniture.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface CustomerRepositoryTest extends JpaRepository<Customer, Long> {

    Customer findByEmail(@RequestParam("email") String email);
}
