module.exports = {
  up: "CREATE TABLE `orders` (`id` int(11) NOT NULL AUTO_INCREMENT, `user_id` int(11) NOT NULL,`delivery_address` text COLLATE utf8mb4_unicode_ci NOT NULL, PRIMARY KEY (`id`),KEY `orders_FK` (`user_id`),CONSTRAINT `orders_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;",
  down: "DROP TABLE IF EXISTS `orders`;",
};
