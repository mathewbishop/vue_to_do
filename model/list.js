const orm = require("orm");


const list = {
    selectAll: function() {
        orm.selectAll("items"); 
    },
    insertOne: function() {
        orm.insertOne("list_item", itemName);
    },
    updateOne: function() {
        orm.updateOne("false", itemName);
    }
}


module.exports = list;