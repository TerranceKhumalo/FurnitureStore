package com.khumaloterrance.furniture.repository;

import com.khumaloterrance.furniture.entity.ItemToPurchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface ItemsToPurchaseRepository extends JpaRepository<ItemToPurchase, Long> {
}