package com.khumaloterrance.furniture.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
//For testing delete afterwards
@ToString
@Getter
@Setter
public class ShoppingCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "shoppingCart")
//    private Set<ItemsToPurchase> itemsToPurchase = new HashSet<ItemsToPurchase>();
    @ManyToMany(cascade = CascadeType.ALL)
    private Set<Product> products;

    @Column(name = "date_created")
    @CreationTimestamp
    private Date dateCreated;

    @Column(name = "last_updated")
    @UpdateTimestamp
    private Date lastUpdated;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "shoppingCart")
    private Customer customer;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

//    public Set<ItemsToPurchase> getItemsToPurchase() {
//        return itemsToPurchase;
//    }
//
//    public void addItemsToPurchase(ItemsToPurchase item) {
//        if(getItemsToPurchase().contains(item)){
//            return;
//        }
//        this.itemsToPurchase.add(item);
//    }
//
//    public void removeItemsToPurchase(ItemsToPurchase item){
//        if(getItemsToPurchase().contains(item)){
//            this.itemsToPurchase.remove(item);
//        }
//        return;
//    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public Date getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(Date lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
