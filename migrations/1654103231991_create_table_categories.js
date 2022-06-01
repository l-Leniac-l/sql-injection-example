module.exports = {
  up: "CREATE TABLE `categories` (`id` int(11) NOT NULL AUTO_INCREMENT,`name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;",
  down: "DROP TABLE IF EXISTS `categories`;",
};
