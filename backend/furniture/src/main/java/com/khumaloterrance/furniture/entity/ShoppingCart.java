package com.khumaloterrance.furniture.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;
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

    @Column(name = "date_created")
    @CreationTimestamp
    private Date dateCreated;

    @Column(name = "last_updated")
    @UpdateTimestamp
    private Date lastUpdated;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "shoppingCart")
    private Customer customer;
}
