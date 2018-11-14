const orm = require("../config/orm");


const list = {
    selectAll: function(boolean) {
        orm.selectAll(boolean); 
    },
    insertOne: function(itemName) {
        orm.insertOne("list_item", itemName);
    },
    updateOne: function(bool, itemName) {
        orm.updateOne(bool, itemName);
    }
}



module.exports = list;