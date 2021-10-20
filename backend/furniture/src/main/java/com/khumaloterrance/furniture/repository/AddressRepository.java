package com.khumaloterrance.furniture.repository;

import com.khumaloterrance.furniture.entity.CustomerAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(path = "address")
public interface AddressRepository extends JpaRepository<CustomerAddress, Long> {
}
