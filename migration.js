const mysql = require("mysql");
const migration = require("mysql-migrations");

const host = process.env.MYSQL_HOST;
const port = process.env.MYSQL_PORT;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const database = process.env.MYSQL_DATABASE;

const connection = mysql.createPool({
  connectionLimit: 10,
  host,
  user,
  password,
  database,
  port,
});

migration.init(connection, __dirname + "/migrations");
