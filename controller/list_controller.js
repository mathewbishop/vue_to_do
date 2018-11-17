//=============================================================
// Modules
//=============================================================
const express = require("express");
const list = require("../model/list");
const router = express.Router();

//=============================================================
// Routes
//=============================================================
router.post("/api/todolist", (req, res) => {
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

router.put("/api/todolist/:id", (req, res) => {
    list.updateOne(1, req.body.list_item, function(data) {
        console.log(data);
        res.json(data);
    })
    
})

router.delete("/api/todolist/:id", (req, res) => {
    let item = req.params.id;
    list.deleteOne(item, function(data) {
        console.log(data);
    })
    // console.log(item);
    res.end()
})

router.get("/api/todolist", (req, res) => {
    list.selectAll(function(data) {
        res.json(data);
    })
});



module.exports = router;