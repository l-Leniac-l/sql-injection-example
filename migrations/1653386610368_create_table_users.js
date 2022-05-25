module.exports = {
  up: "CREATE TABLE users (id int(20) auto_increment NOT NULL, email varchar(100) NOT NULL,password_md5 varchar(100) NOT NULL, first_name varchar(100) NULL, last_name varchar(100) NULL,is_admin BOOL DEFAULT false NOT NULL, CONSTRAINT users_PK PRIMARY KEY (id) );",
  down: "DROP TABLE `users`",
};
