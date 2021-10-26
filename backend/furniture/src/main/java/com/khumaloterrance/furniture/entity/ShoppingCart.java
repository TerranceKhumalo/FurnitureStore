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
//For testing delete afterwards
@ToString
public class ShoppingCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinTable(name = "shopping_cart_products")
    private int productQuantity;

    @ManyToMany(cascade = CascadeType.MERGE)
    private Set<Product>products;

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

    public int getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity() {
        this.productQuantity += 1;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void addProducts(Product product) {
        if(getProducts().contains(product)){
            setProductQuantity();
            return;
        }
        products.add(product);
    }

    public void removeProduct(Product product){
        if(getProducts().contains(product)){
            products.remove(product);
        }
        return;
    }

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
