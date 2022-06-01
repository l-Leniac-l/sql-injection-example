module.exports = {
  up: "CREATE TABLE `users` (`id` int(20) NOT NULL AUTO_INCREMENT,`email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL, `password_md5` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL, `first_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL, `last_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL, `is_admin` tinyint(1) NOT NULL DEFAULT 0,PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;",
  down: "DROP TABLE IF EXISTS `users`;",
};
