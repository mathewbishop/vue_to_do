const orm = require("../config/orm");


const list = {
    selectAll: function(bool, cb) {
        orm.selectAll(bool, res => {
        cb(res)
        }); 
    },
    insertOne: function(itemName) {
        orm.insertOne("list_item", itemName);
    },
    updateOne: function(bool, itemName) {
        orm.updateOne(bool, itemName);
    }
}



module.exports = list;