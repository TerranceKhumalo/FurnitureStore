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

    @ManyToMany(cascade = CascadeType.ALL)
    private Set<Product>products;

    @OneToOne(cascade = CascadeType.ALL)
    private Customer customer;
}
