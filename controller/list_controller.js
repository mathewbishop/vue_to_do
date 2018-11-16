//=============================================================
// Modules
//=============================================================
const express = require("express");
const list = require("../model/list");
const router = express.Router();

router.post("/api/add-item", (req, res) => {
// console.log(req.body);
//     let newItem = req.body;
//         list.insertOne(newItem, function(data) {
//             console.log(data);
//         })
//     res.end();
});

router.put("/api/list/item-update", (req, res) => {
    console.log(req.body);
    res.end();
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