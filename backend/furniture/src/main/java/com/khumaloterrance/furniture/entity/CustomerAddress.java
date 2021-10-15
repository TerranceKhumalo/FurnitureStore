package com.khumaloterrance.furniture.entity;

import lombok.ToString;

import javax.persistence.*;

@Table(name = "customer_address")
@Entity
//For testing delete afterwards
@ToString
public class CustomerAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String streetName;

    private String city;

    private int zipCode;

    private String country;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "address")
    private Customer customer;
}