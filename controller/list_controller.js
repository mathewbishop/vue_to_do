//=============================================================
// Modules
//=============================================================
const express = require("express");
const list = require("../model/list");
const router = express.Router();

//=============================================================
// Routes
//=============================================================

// Post route for add list item
router.post("/api/todolist", (req, res) => {
    let newItem = req.body.list_item
    if (newItem === "") {
        res.sendStatus(400);
    }
    else {
        list.insertOne(newItem, function(data) {
            res.json(newItem)
        })
    }
      
});

// Put route for update list item status (complete/not-complete)
router.put("/api/todolist/:id", (req, res) => {
    list.updateOne(1, req.body.list_item, function(data) {
        res.json(data);
    })
    
})

// Delete route for removing completed items
router.delete("/api/todolist/:id", (req, res) => {
    let item = req.params.id;
    list.deleteOne(item, function(data) {
    })
    res.end()
})

// Get route to get data for all items
router.get("/api/todolist", (req, res) => {
    list.selectAll(function(data) {
        res.json(data);
    })
});



module.exports = router;