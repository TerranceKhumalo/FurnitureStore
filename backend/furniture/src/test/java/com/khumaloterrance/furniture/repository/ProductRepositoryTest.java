package com.khumaloterrance.furniture.repository;


import com.khumaloterrance.furniture.entity.Product;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;


@SpringBootTest
public class ProductRepositoryTest  {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    ProductRepository repositoryTest;

    @Test
    @Transactional
    public void findById_ProductIsFound(){
        Optional<Product> productOptional = repositoryTest.findById(1L);
        assertTrue(productOptional.isPresent());
        logger.info("{}", productOptional);
    }

    @Test
    @Transactional
    public void findById_ProductNotFound(){
        Optional<Product> productOptional = repositoryTest.findById(100L);
        assertFalse(productOptional.isPresent());
        logger.info("{}", productOptional);
    }
}


