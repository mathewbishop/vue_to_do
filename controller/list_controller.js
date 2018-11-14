//=============================================================
// Modules
//=============================================================
const express = require("express");
const list = require("../model/list");
const router = express.Router();

router.post("/api/list", (req, res) => {
    let newTodo = req.body;
    list.insertOne(newTodo);
    res.json(newTodo);
});

router.get("/api/list/not-complete", (req, res) => {

});

router.get("api/list/complete", (req, res) => {

});


module.exports = router;