module.exports = {
  up: "INSERT INTO `users` ( email,password_md5, first_name, last_name, is_admin) VALUES ( 'john@doe.com', 'e04efcfda166ec49ba7af5092877030e', 'John','Doe',0),('zeke@master.com', '76a5ae8211a1db927a4566d1147e6cc7', 'Zeke','Master',0),('pete@pat.com', 'ab65330f61879ac4881e942ef0ed9afd', 'Pete','Pat',1);",
  down: "DELETE FROM `users`",
};
