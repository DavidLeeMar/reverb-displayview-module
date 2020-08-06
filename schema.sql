DROP DATABASE IF EXISTS reverb;
CREATE DATABASE reverb;
USE reverb;

CREATE TABLE sellers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  sellername VARCHAR(250) NOT NULL,
  streetaddress VARCHAR(250) NOT NULL,
  city VARCHAR(250) NOT NULL,
  _state VARCHAR(2) NOT NULL,
  country VARCHAR(100) NOT NULL,
  PRIMARY KEY(ID)
);

CREATE TABLE categories (
  id INTEGER NOT NULL AUTO_INCREMENT,
  topcategory VARCHAR(25) NOT NULL,
  maincategory VARCHAR(25) NOT NULL,
  subcategory VARCHAR(25) NOT NULL,
  PRIMARY KEY(ID)
);

CREATE TABLE products (
  id INTEGER NOT NULL AUTO_INCREMENT,
  productname VARCHAR(200) NOT NULL,
  price FLOAT NOT NULL,
  shippingcost FLOAT NOT NULL,
  productdescription VARCHAR(300) NOT NULL,
  seller_id INTEGER NOT NULL,
  category_id INTEGER NOT NULL,
  listed VARCHAR(250) NOT NULL,
  _condition VARCHAR(250) NOT NULL,
  brand	VARCHAR(250) NOT NULL,
  model	VARCHAR(250) NOT NULL,
  finish	VARCHAR(250) NOT NULL,
  categories VARCHAR(250) NOT NULL,
  _year INTEGER (4) NOT NULL,
  made_in VARCHAR(250) NOT NULL,
  PRIMARY KEY(ID)
);





CREATE TABLE images (
id INTEGER NOT NULL AUTO_INCREMENT,
imagename VARCHAR(250) NOT NULL,
product_id INTEGER NOT NULL,
PRIMARY KEY(ID),
FOREIGN KEY (product_id) REFERENCES products(id)
);




ALTER TABLE products
ADD FOREIGN KEY (seller_id) REFERENCES sellers(id);

ALTER TABLE products
ADD FOREIGN KEY (category_id) REFERENCES sellers(id);
