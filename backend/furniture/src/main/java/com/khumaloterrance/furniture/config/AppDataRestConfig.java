package com.khumaloterrance.furniture.config;

import com.khumaloterrance.furniture.entity.Product;
import com.khumaloterrance.furniture.entity.ProductCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class AppDataRestConfig implements RepositoryRestConfigurer {

    @Autowired
    private EntityManager entityManager;

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

        exposeIds(config);
    }

    private void exposeIds(RepositoryRestConfiguration config) {
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
        List<Class> entityClasses = new ArrayList<>();
//get entity types
        for(EntityType tepEntityType: entities){
            entityClasses.add(tepEntityType.getJavaType());
        }
//expose entity ids for the array of entity/domain types
        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);
    }
}
