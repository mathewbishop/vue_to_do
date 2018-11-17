const orm = require("../config/orm");


const list = {
    selectAll: function(cb) {
        orm.selectAll(res => {
            cb(res)
        }); 
    },
    insertOne: function(itemName, cb) {
        orm.insertOne("list_item", itemName, res => {
            cb(res);
        });
    },
    updateOne: function(bool, itemName, cb) {
        orm.updateOne(bool, itemName, res => {
            cb(res);
        })
    },
    deleteOne: function(itemName, cb) {
        orm.deleteOne(itemName, res => {
            cb(res);
        })
    }
}



module.exports = list;