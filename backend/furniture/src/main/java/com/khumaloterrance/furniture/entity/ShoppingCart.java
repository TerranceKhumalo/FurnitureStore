package com.khumaloterrance.furniture.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
//For testing delete afterwards
@ToString
public class ShoppingCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int productQuantity;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_ID")
    private Set<Product>products;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_ID")
    private Customer customer;
}
