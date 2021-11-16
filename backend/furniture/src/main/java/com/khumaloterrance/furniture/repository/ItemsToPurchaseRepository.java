package com.khumaloterrance.furniture.repository;

import com.khumaloterrance.furniture.entity.ItemToPurchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ItemsToPurchaseRepository extends JpaRepository<ItemToPurchase, Long> {
}
