//=============================================================
// Modules
//=============================================================
const connection = require("./connection");


//=============================================================
// ORM object
//=============================================================
const orm = {
    selectAll: function(table) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(column, itemName) {
        let queryString = "INSERT INTO items (??) VALUES (?)";
        connection.query(queryString, [column, itemName], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(bool, itemName) {
        let queryString = "UPDATE items SET completed = ? WHERE list_item = ?";
        connection.query(queryString, [bool, itemName], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    end: function() {
        connection.end();
    }
}


module.exports = orm;
