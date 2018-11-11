//=============================================================
// Modules
//=============================================================
const express = require("express");
const model = require("../model/list");
const router = express.Router();

router.post("/api/list", (req, res) => {
    let newListItem = req.body;
    
});

router.get("/api/list/not-complete", (req, res) => {

});

router.get("api/list/complete", (req, res) => {

});


module.exports = router;