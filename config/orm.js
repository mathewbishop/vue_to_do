//=============================================================
// Modules
//=============================================================
const connection = require("./connection");


//=============================================================
// ORM object
//=============================================================
const orm = {
    selectAll: function(bool, cb) {
        let queryString = "SELECT * FROM items WHERE completed = ?";
        connection.query(queryString, [bool], (err, result) => {
            if (err) throw err;
            cb(result)
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
