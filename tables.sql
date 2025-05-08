create database hardwarestore;
use hardwarestore;

CREATE TABLE `Product` (
  `product_id` int PRIMARY KEY,
  `name` varchar(255),
  `description` text,
  `price` float,
  `image` varchar(255),
  `stock` int,
  `min_stock` int,
  `category_id` int,
  `offer_percentage` float,
  `product_status` boolean,
  `created_at` date,
  `updated_at` date
);

CREATE TABLE `Category` (
  `category_id` int PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `User` (
  `user_id` int PRIMARY KEY,
  `user_name` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `role_id` int,
  `user_status` boolean,
  `created_at` date,
  `updated_at` date
);

CREATE TABLE `Role` (
  `role_id` int PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `Cart` (
  `cart_id` int PRIMARY KEY,
  `user_id` int,
  `created_at` date,
  `updated_at` date
);

CREATE TABLE `itemCart` (
  `item_id` int PRIMARY KEY,
  `cart_id` int,
  `product_id` int,
  `quantity` int
);

CREATE TABLE `Sale` (
  `sale_id` int PRIMARY KEY,
  `user_id` int,
  `sale_total` float,
  `created_at` date
);

CREATE TABLE `Notification` (
  `notification_id` int PRIMARY KEY,
  `product_id` int,
  `message` text,
  `notification_status` boolean,
  `created_at` date
);


ALTER TABLE `Product` ADD FOREIGN KEY (`category_id`) REFERENCES `Category` (`category_id`);

ALTER TABLE `User` ADD FOREIGN KEY (`role_id`) REFERENCES `Role` (`role_id`);

ALTER TABLE `Cart` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`);

ALTER TABLE `itemCart` ADD FOREIGN KEY (`cart_id`) REFERENCES `Cart` (`cart_id`);

ALTER TABLE `itemCart` ADD FOREIGN KEY (`product_id`) REFERENCES `Product` (`product_id`);

ALTER TABLE `Sale` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`);

ALTER TABLE `Notification` ADD FOREIGN KEY (`product_id`) REFERENCES `Product` (`product_id`);

--- seleccionar tablas
SELECT * FROM Cart;
SELECT * FROM Category;
SELECT * FROM itemCart;
SELECT * FROM Notification;
SELECT * FROM Product;
SELECT * FROM Role;
SELECT * FROM Sale;
SELECT * FROM User;

--- agregar datos a category y role
INSERT INTO `Category` (`category_id`, `name`) VALUES
(1, 'Herramientas eléctricas'),
(2, 'Herramientas manuales'),
(3, 'Materiales de construcción'),
(4, 'Pinturas y acabados'),
(5, 'Plomería'),
(6, 'Electricidad'),
(7, 'Accesorios para el hogar'),
(8, 'Equipo de protección')