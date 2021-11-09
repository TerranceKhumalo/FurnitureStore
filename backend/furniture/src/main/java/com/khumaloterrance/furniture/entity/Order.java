package com.khumaloterrance.furniture.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity(name = "orders")
@Getter
@Setter
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String OrderTrackingNumber;

    private int totalQuantity;

    private BigDecimal totalPrice;

    private String status;

    @CreationTimestamp
    private Date dateCreated;

    @UpdateTimestamp
    private Date lastUpdated;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "shippingAddress_id", referencedColumnName = "id")
    private Address shippingAddress;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
    private Set<ItemToPurchase> itemsToPurchase = new HashSet<>();

    public void add(ItemToPurchase item){
        if(item != null){
            if(itemsToPurchase == null ){itemsToPurchase = new HashSet<>();}
            itemsToPurchase.add(item);
            item.setOrder(this);
        }
    }
}
