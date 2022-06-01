module.exports = {
  up: "CREATE TABLE `order_products` (`order_id` int(11) NOT NULL,`product_id` int(11) NOT NULL,`quantity` int(11) NOT NULL,KEY `order_products_FK` (`order_id`), KEY `order_products_FK_1` (`product_id`), CONSTRAINT `order_products_FK` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`), CONSTRAINT `order_products_FK_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;",
  down: "DROP TABLE IF EXISTS `order_products`;",
};
