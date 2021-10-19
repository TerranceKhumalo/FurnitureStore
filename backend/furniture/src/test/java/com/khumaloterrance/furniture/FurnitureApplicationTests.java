package com.khumaloterrance.furniture;

import com.khumaloterrance.furniture.repository.ProductCategoryRepositoryTest;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class FurnitureApplicationTests {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	ProductCategoryRepositoryTest repositoryTest;

	@Test
	void contextLoads() {
	}

}
