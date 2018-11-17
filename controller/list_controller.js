//=============================================================
// Modules
//=============================================================
const express = require("express");
const list = require("../model/list");
const router = express.Router();

router.post("/api/add-item", (req, res) => {
// console.log(req.body.list_item);
    let newItem = req.body.list_item
    if (newItem === "") {
        res.sendStatus(400);
    }
    else {
        list.insertOne(newItem, function(data) {
            console.log(data);
            res.json(newItem)
        })
    }
    
        
});

router.put("/api/list/item-update", (req, res) => {
    list.updateOne(1, req.body.list_item, function(data) {
        console.log(data);
    })
    res.sendStatus(201);
})

router.delete("/api/list/:item", (req, res) => {
    let item = req.params.item;
    list.deleteOne(item, function(data) {
        console.log(data);
    })
    // console.log(item);
    res.end()
})

router.get("/api/list/not-complete", (req, res) => {
    list.selectAll(0, function(data) {
        res.json(data);
    })
});

router.get("/api/list/complete", (req, res) => {
    list.selectAll(1, function(data) {
        res.json(data);
    })
});


module.exports = router;