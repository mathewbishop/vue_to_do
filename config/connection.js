const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "dev",
    password: "dev237",
    database: "vue_todo_db"
});


module.exports = connection;