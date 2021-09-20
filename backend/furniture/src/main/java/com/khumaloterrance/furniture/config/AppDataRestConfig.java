package com.khumaloterrance.furniture.config;

import com.khumaloterrance.furniture.entity.Product;
import com.khumaloterrance.furniture.entity.ProductCategory;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class AppDataRestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);

        HttpMethod [] unspportedActions = {HttpMethod.POST, HttpMethod.DELETE, HttpMethod.PATCH};

        //disable Http method: PUT, POST and DELETE for PRODUCTS
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(unspportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(unspportedActions));

        //disable Http method: PUT, POST and DELETE for PRODUCTS CATEGORY
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(unspportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(unspportedActions));
    }
}
