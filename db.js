// const mysql = require("mysql2");
// const dbConnection = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "nodejs_login"

// }).promise()

// module.exports = dbConnection;

let { Client } = require("pg");
const dbConfig = {
  connectionString:
    "postgres://vulittmeimfkbm:b423b6d6687d462a03a13f9b937164d652a343e751957ddafb0dba01233f05ec@ec2-54-147-33-38.compute-1.amazonaws.com:5432/d6gbcb4sq81mmq",
  ssl: {
    rejectUnauthorized: false,
  },
};

const conn = new Client(dbConfig);
conn.connect();
module.exports = conn;