--------------------------------------------------------
-- Create user and config password
--------------------------------------------------------
CREATE USER 'ecommerceapp'@'localhost' IDENTIFIED BY 'ecommerceapp';

GRANT ALL PRIVILEGES ON * . * TO 'ecommerceapp'@'localhost';

#
# Starting with MySQL 8.0.4, the MySQL team changed the 
# default authentication plugin for MySQL server 
# from mysql_native_password to caching_sha2_password.
#
# The command below will make the appropriate updates for your user account.
#
# See the MySQL Reference Manual for details: 
# https://dev.mysql.com/doc/refman/8.0/en/caching-sha2-pluggable-authentication.html
#
ALTER USER 'ecommerceapp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ecommerceapp';


-- -----------------------------------------------------
-- Schema full-stack-ecommerce
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `full-stack-ecommerce`;

CREATE SCHEMA `full-stack-ecommerce`;
USE `full-stack-ecommerce` ;

-- -----------------------------------------------------
-- Table `full-stack-ecommerce`.`product_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-ecommerce`.`product_category` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `full-stack-ecommerce`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-ecommerce`.`product` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `sku` VARCHAR(255) DEFAULT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
  `unit_price` DECIMAL(13,2) DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `active` BIT DEFAULT 1,
  `units_in_stock` INT(11) DEFAULT NULL,
   `date_created` DATETIME(6) DEFAULT NULL,
  `last_updated` DATETIME(6) DEFAULT NULL,
  `category_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category` (`category_id`),
  CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Add sample data
-- -----------------------------------------------------

INSERT INTO product_category(category_name) VALUES ('COUCHES'); -- ID 1


INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('COUCHES-1000', '3 Seater Couch Urban Pool Turquoise', 'The Urban three seater sofa is cozy and soft with a modern style. Perfect for any living room. And even a better match with our Urban occasional chair or our Urban l-shaped sofa. Available in several luxurious fabrics.',
'assets/images/products/couches/COUCHES-1000.jpg'
,1,100,19.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('COUCHES-1001', '3 Seater Couch Urban Wild Whiskey Premium Leather', 'The Urban three seater sofa is cozy and soft with a modern style. Perfect for any living room. And even a better match with our Urban occasional chair or our Urban l-shaped sofa. Available in several luxurious fabrics.',
'assets/images/products/couches/COUCHES-1002.jpg'
,1,100,29.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('COUCHES-1002', '3 Seater Couch Urban Tan Premium Leather', 'This 3 seater Volu couch will be an absolute show stopper in your living room. Its sexy design and luxurious velvet fabrics set it apart from anything else you could possibly dream of.',
'assets/images/products/couches/COUCHES-1003.jpg'
,1,100,24.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('COUCHES-1004', '3 Seater Couch Urban Sigar Premium Leather', 'Contemporary and Beautiful. Both words written with a capital letter. The Urban l-shaped couch is the perfect sofa for small spaces where you want to fit more people. It is chic and modern in all the colours available.',
'assets/images/products/couches/COUCHES-1004.jpg'
,1,100,24.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('COUCHES-1005', '3 Seater Couch Urban Dark Grey', 'The Urban three seater sofa is cozy and soft with a modern style. Perfect for any living room. And even a better match with our Urban occasional chair or our Urban l-shaped sofa. Available in several luxurious fabrics.',
'assets/images/products/couches/COUCHES-1005.jpg'
,1,100,24.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('COUCHES-1006', '3 Seater Couch Urban Plaster Beige', 'The Urban three seater sofa is cozy and soft with a modern style. Perfect for any living room. And even a better match with our Urban occasional chair or our Urban l-shaped sofa. Available in several luxurious fabrics.',
'assets/images/products/couches/COUCHES-1006.jpg'
,1,100,23.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('COUCHES-1007', '3 Seater Couch Volu Wild Whiskey Premium Leather', 'This 3 seater Volu couch will be an absolute show stopper in your living room. Its sexy design and luxurious velvet fabrics set it apart from anything else you could possibly dream of.',
'assets/images/products/couches/COUCHES-1007.jpg'
,1,100,23.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('COUCHES-1008', '3 Seater Couch Volu Silver Lining Grey Velvet', 'This 3 seater Volu couch will be an absolute show stopper in your living room. Its sexy design and luxurious velvet fabrics set it apart from anything else you could possibly dream of.',
'assets/images/products/couches/COUCHES-1008.jpg'
,1,100,14.99,1, NOW());


INSERT INTO product_category(category_name) VALUES ('OCCASIONAL CHAIRS'); -- ID 2

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('OCCASIONAL-CHAIRS-2000', 'Occasional Chair Urban Pool Turquoise', 'Our Urban occasional chair is sleek and sophisticated that takes the best elements from Scandinavian design in a South African context. Upholstered in several high-quality fabrics (Hertex).',
'assets/images/products/occasional-chairs/OCCASIONAL-CHAIRS-2000.jpg'
,1,100,16.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('OCCASIONAL-CHAIRS-2001', 'Occasional Chair Urban Plaster Beige', 'Our Urban occasional chair is sleek and sophisticated that takes the best elements from Scandinavian design in a South African context. Upholstered in several high-quality fabrics (Hertex).',
'assets/images/products/occasional-chairs/OCCASIONAL-CHAIRS-2001.jpg'
,1,100,16.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('OCCASIONAL-CHAIRS-2002', 'Occasional Chair Vivaldi Pool', 'Give your lounge an upgrade with this Vivaldi armchair. Sit back, relax and contemplate life. This Vivaldi occasional chair with a deep seat with comfortable cushions make lounging a no-brainer.',
'assets/images/products/occasional-chairs/OCCASIONAL-CHAIRS-2002.jpg'
,1,100,26.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('OCCASIONAL-CHAIRS-2003', 'Occasional Chair Zina Sulphur Gold Velvet', 'If you are looking to add a bit of luxurious ‘bling’ in your room, then our Zina chair is your occasional chair. Throw in lively colour and contemporary design, and you have the makings of a very inviting occasional chair.',
'assets/images/products/occasional-chairs/OCCASIONAL-CHAIRS-2003.jpg'
,1,100,16.95,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('OCCASIONAL-CHAIRS-2004', 'Occasional Chair Shanghai Pool', 'If you are looking to add a bit of luxurious ‘bling’ in your room, then our Zina chair is your occasional chair. Throw in lively colour and contemporary design, and you have the makings of a very inviting occasional chair.',
'assets/images/products/occasional-chairs/OCCASIONAL-CHAIRS-2004.jpg'
,1,100,15.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('OCCASIONAL-CHAIRS-2005', 'Occasional Chair Shanghai Dark Grey', 'The occasional armchair is where you go to unwind, unplug, and relax. But be careful, others will try to occupy “your chair”. Share the chair love but not your chair',
'assets/images/products/occasional-chairs/OCCASIONAL-CHAIRS-2005.jpg'
,1,100,19.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('OCCASIONAL-CHAIRS-2006', 'Daybed Kolton Urban Shore', 'The occasional armchair is where you go to unwind, unplug, and relax. But be careful, others will try to occupy “your chair”. Share the chair love but not your chair',
'assets/images/products/occasional-chairs/OCCASIONAL-CHAIRS-2006.jpg'
,1,100,18.98,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('OCCASIONAL-CHAIRS-2007', 'Daybed Kolton Cement Grey', 'Looking for a perfect lounging companion? Look no further than our Kolton day bed with its unique size and style for added comfort. This is a must-have for a contemporary bedroom or living room and its even great for guest rooms.',
'assets/images/products/occasional-chairs/OCCASIONAL-CHAIRS-2007.jpg'
,1,100,18.98,2, NOW());

INSERT INTO product_category(category_name) VALUES ('SIDEBOARDS'); -- ID 3

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('SIDEBOARDS-3000', '3 Drawer Server Lilo Satin Light Grey', 'Add some happy colour to your bedroom with this modern chic Lilo cabinet. The three drawers set on top of a gold base is a winner.',
'assets/images/products/sideboards/SIDEBOARDS-3000.jpg'
,1,100,28.98,3, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('SIDEBOARDS-3001', '3 Drawer Server Lilo Satin Black', 'Add some happy colour to your bedroom with this modern chic Lilo cabinet. The three drawers set on top of a gold base is a winner.',
'assets/images/products/sideboards/SIDEBOARDS-3001.jpg'
,1,100,27.98,3, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('SIDEBOARDS-3002', 'Server Atra Medium Vintage Brown Finish', 'Our Atra server is sleek, beautiful and modern. It is sleek due to the matt black legs. It is beautiful because of the oak wood used. And it is modern because of the different colour tones used.',
'assets/images/products/sideboards/SIDEBOARDS-3002.jpg'
,1,100,26.98,3, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('SIDEBOARDS-3003', 'Oak Server Bios Two Walnut', 'The Bios II server features natural wood grain juxtaposed against a black finish for a modern feel. With three swinging doors and one open cabinet, this contemporary cabinet will help keep your home clutter-free.',
'assets/images/products/sideboards/SIDEBOARDS-3003.jpg'
,1,100,56.98,3, NOW());

INSERT INTO product_category(category_name) VALUES ('COFFEE TABLE'); -- ID 4

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('COFFEE-TABLE-4000', 'Coffee Table Barbell Monsoon Grey', 'Made from highest quality wood and available in a clear oak finish or walnut oak finish, our Barbell Coffee Table offers plenty of room for books, magazines and all your favorites with its glass top and open shelf.',
'assets/images/products/coffee table/COFFEE-TABLE-4000.jpg'
,1,100,12.98,4, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('COFFEE-TABLE-4001', 'Coffee Table Culla Urban Shore Fabric with Walnut Top', 'Modern and timeless, this upholstered coffee table with its sleek oak top will add a dash of elegance to your living room. The Culla coffee table is versatile as well as beautiful with its clever storage space hidden perfectly within its design.',
'assets/images/products/coffee table/COFFEE-TABLE-4001.jpg'
,1,100,13.98,4, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('COFFEE-TABLE-4002', 'Bedside Pedestal Stylo Satin Dark Grey', 'Modern and elegant. Our Stylo bedside pedestal comes in white and emerald green, giving you the option to add some playful colours to your bedroom décor.  Great storage space in what it seems a small space.',
'assets/images/products/coffee table/COFFEE-TABLE-4002.jpg'
,1,100,12.98,4, NOW());

INSERT INTO product_category(category_name) VALUES ('TV CABINETS'); -- ID 5

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('TV-CABINETS-5000', 'Hairpin TV Stand 3 Drawer Stylo Satin White', 'Add some happy colour to your living room with this modern chic and compact Stylo TV stand. This TV cabinet on gold legs and three drawers is a winner. We believe that the design of this modern TV stand is a smart, sophisticated design.',
'assets/images/products/tv cabinets/TV-CABINETS-5000.jpg'
,1,100,17.99,5, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('TV-CABINETS-5001', 'Hairpin Tv Stand 2 Drawer Stylo Satin Teal', 'Add some happy colour to your living room with this modern chic and compact Stylo TV stand. This TV cabinet on gold legs and three drawers is a winner. We believe that the design of this modern TV stand is a smart, sophisticated design.',
'assets/images/products/tv cabinets/TV-CABINETS-5001.jpg'
,1,100,18.99,5, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('TV-CABINETS-5002', 'Hairpin Tv Stand 2 Drawer Stylo Satin Blush Pink', 'Add some happy colour to your living room with this modern chic and compact Stylo TV stand. This TV cabinet on gold legs and three drawers is a winner. We believe that the design of this modern TV stand is a smart, sophisticated design.',
'assets/images/products/tv cabinets/TV-CABINETS-5002.jpg'
,1,100,18.99,5, NOW());

INSERT INTO product_category(category_name) VALUES ('DINNING CHAIRS'); -- ID 6

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('DINNING-CHAIRS-6000', 'Dining Chair Carver Urban Pool Turquoise', 'Add some happy colour to your living room with this modern chic and compact Stylo TV stand. This TV cabinet on gold legs and three drawers is a winner. We believe that the design of this modern TV stand is a smart, sophisticated design.',
'assets/images/products/dinning chairs/DINNING-CHAIRS-6000.jpg'
,1,100,13.99,6, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('DINNING-CHAIRS-6001', 'Dining Chair Carver Urban Grey', 'Our Urban dining carver is sleek and sophisticated that takes the best elements from Scandinavian design in a South African context. Upholstered in several high-quality fabrics (Hertex), this dining carver adds character to a living space.',
'assets/images/products/dinning chairs/DINNING-CHAIRS-6001.jpg'
,1,100,15.99,6, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('DINNING-CHAIRS-6002', 'Dining Chair Urban Dark Grey', 'Our Urban dining carver is sleek and sophisticated that takes the best elements from Scandinavian design in a South African context. Upholstered in several high-quality fabrics (Hertex), this dining carver adds character to a living space.',
'assets/images/products/dinning chairs/DINNING-CHAIRS-6002.jpg'
,1,100,15.99,6, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('DINNING-CHAIRS-6003', 'Dining Chair Urban Morada Stone Brown', 'Our Urban dining carver is sleek and sophisticated that takes the best elements from Scandinavian design in a South African context. Upholstered in several high-quality fabrics (Hertex), this dining carver adds character to a living space.',
'assets/images/products/dinning chairs/DINNING-CHAIRS-6003.jpg'
,1,100,14.99,6, NOW());

