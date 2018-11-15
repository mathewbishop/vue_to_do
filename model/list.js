const orm = require("../config/orm");


const list = {
    selectAll: function(bool, cb) {
        orm.selectAll(bool, res => {
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
    end: function() {
        orm.end();
    }
}



module.exports = list;