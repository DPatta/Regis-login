const mysql = require("mysql2");
const dbConnection = mysql.createPool({
    host: "arjuna.db.elephantsql.com",
    user: "vzxibjab",
    password: "2B9TAgNT-BnF-sxKBGe-EXycTPe93IGD",
    database: "vzxibjab"

}).promise()

module.exports = dbConnection;

