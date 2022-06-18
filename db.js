// const mysql = require("mysql2");
// const dbConnection = mysql.createPool({
//     host: "arjuna.db.elephantsql.com",
//     user: "vzxibjab",
//     password: "2B9TAgNT-BnF-sxKBGe-EXycTPe93IGD",
//     database: "vzxibjab"

// }).promise()

// module.exports = dbConnection;
let { Client } = require("pg");
const dbConfig = {
  connectionString:
    "postgres://vzxibjab:2B9TAgNT-BnF-sxKBGe-EXycTPe93IGD@arjuna.db.elephantsql.com/vzxibjab",
  ssl: {
    rejectUnauthorized: false,
  },
};

const conn = new Client(dbConfig);
conn.connect();
module.exports = conn;
