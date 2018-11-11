const connection = require("./connection");

const orm = {
    selectAll: function(table) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, table, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function()
}