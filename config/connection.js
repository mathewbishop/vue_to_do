//=============================================================
// Modules
//=============================================================
const mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL) 
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "dev",
        password: "dev237",
        database: "vue_to_do"
    });
}


module.exports = connection;