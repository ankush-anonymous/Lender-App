import "dotenv/config";
import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "lenderapp",
    // host: process.env.HOST,
    // user: process.env.MYSQLUSER,
    // password: process.env.MYSQLPSWD,
    // database: process.env.DBNAME,
  })
  .promise();

export default pool;
