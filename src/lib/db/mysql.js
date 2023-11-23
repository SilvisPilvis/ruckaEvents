import mysql from "mysql2/promise";
let mysqlconn = null;
export function mysqlConnection() {
    if (!mysqlconn) {
    //   used for development with MAMP
      mysqlconn = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "ruckadb",
      });
    }
    return mysqlconn;
}