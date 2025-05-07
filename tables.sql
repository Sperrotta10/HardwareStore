CREATE TABLE `Producto` (
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

CREATE TABLE `Categoria` (
  `category_id` int PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `Usuario` (
  `user_id` int PRIMARY KEY,
  `user_name` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `role_id` int,
  `user_status` boolean,
  `created_at` date,
  `updated_at` date
);

CREATE TABLE `Roles` (
  `role_id` int PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `Carrito` (
  `cart_id` int PRIMARY KEY,
  `user_id` int,
  `created_at` date,
  `updated_at` date
);

CREATE TABLE `ItemsCarrito` (
  `item_id` int PRIMARY KEY,
  `cart_id` int,
  `product_id` int,
  `quantity` int
);

CREATE TABLE `Ventas` (
  `sale_id` int PRIMARY KEY,
  `user_id` int,
  `sale_total` float,
  `created_at` date
);

/*
CREATE TABLE `ItemsVenta` (
  `item_id` int PRIMARY KEY,
  `sale_id` int,
  `product_id` int,
  `quantity` int,
  `price` float
);
*/

CREATE TABLE `Notificaciones` (
  `notification_id` int PRIMARY KEY,
  `product_id` int,
  `message` text,
  `notification_status` boolean,
  `created_at` date
);

ALTER TABLE `Producto` ADD FOREIGN KEY (`category_id`) REFERENCES `Categoria` (`category_id`);

ALTER TABLE `Usuario` ADD FOREIGN KEY (`role_id`) REFERENCES `Roles` (`role_id`);

ALTER TABLE `Carrito` ADD FOREIGN KEY (`user_id`) REFERENCES `Usuario` (`user_id`);

ALTER TABLE `ItemsCarrito` ADD FOREIGN KEY (`cart_id`) REFERENCES `Carrito` (`cart_id`);

ALTER TABLE `ItemsCarrito` ADD FOREIGN KEY (`product_id`) REFERENCES `Producto` (`product_id`);

ALTER TABLE `Ventas` ADD FOREIGN KEY (`user_id`) REFERENCES `Usuario` (`user_id`);

/*
ALTER TABLE `ItemsVenta` ADD FOREIGN KEY (`sale_id`) REFERENCES `Ventas` (`sale_id`);

ALTER TABLE `ItemsVenta` ADD FOREIGN KEY (`product_id`) REFERENCES `Producto` (`product_id`);
*/

ALTER TABLE `Notificaciones` ADD FOREIGN KEY (`product_id`) REFERENCES `Producto` (`product_id`);
