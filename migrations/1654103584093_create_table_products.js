module.exports = {
  up: "CREATE TABLE `products` (`id` int(11) NOT NULL AUTO_INCREMENT,`name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL, `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL, `category_id` int(11) DEFAULT NULL,`available` tinyint(1) NOT NULL DEFAULT 0, `price` float NOT NULL,PRIMARY KEY (`id`),KEY `products_FK` (`category_id`),CONSTRAINT `products_FK` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;",
  down: "DROP TABLE IF EXISTS `products`;",
};
