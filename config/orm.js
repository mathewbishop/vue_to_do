const connection = require("./connection");

const orm = {
    selectAll: function(table) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(column, itemName) {
        let queryString = "INSERT INTO vue_todo_db (??) VALUES (?)";
        connection.query(queryString, [column, itemName], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(bool, itemName) {
        let queryString = "UPDATE vue_todo_db SET completed = ? WHERE list_item = ?";
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
