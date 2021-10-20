package com.khumaloterrance.furniture.repository;

import com.khumaloterrance.furniture.entity.Customer;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class CustomerRepositoryTest {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    CustomerRepository customerRepository;

    @Test
    @Transactional
    public void findByEmailTest(){
        Customer customer = customerRepository.findByEmail("khumaloterrance@gmail.com");
        assertNotNull(customer);
    }

    @Test
    @Transactional
    public void findByEmailCustomerNameTest(){
       Customer customer = customerRepository.findByEmail("khumaloterrance@gmail.com");
       assertEquals("Timmy", customer.getName());
    }

    @Test
    @Transactional
    public void findByEmailFailTest(){
        Customer customer = customerRepository.findByEmail("khumaloterrance1@gmail.com");
        assertNull(customer);
//        logger.debug("This is an empty {}", customer);
    }

    @Test
    @Transactional
    @DirtiesContext
    public void saveCustomerTest(){
        Customer customer1 = new Customer();
        customer1.setName("Terrance");
        customer1.setEmail("khumaloterrance1@gmail.com");
        customer1.setSurname("khumalo");
        Customer customer = customerRepository.save(customer1);
        assertNotNull(customer);
//        logger.debug("This is an empty {}", customer);
    }

}
