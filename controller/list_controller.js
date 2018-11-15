//=============================================================
// Modules
//=============================================================
const express = require("express");
const list = require("../model/list");
const router = express.Router();

router.post("/api/add-item", (req, res) => {
    let newTodo = req.body;
    list.insertOne(newTodo);
    res.json(newTodo);
});

router.get("/api/list/not-complete", (req, res) => {
        list.selectAll(0, function(data) {
            res.json(data);
        })
});

router.get("api/list/complete", (req, res) => {
    let complete = list.selectAll(1);
    res.json(complete);
});


module.exports = router;