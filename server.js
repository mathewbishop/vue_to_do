//=============================================================
// Modules
//=============================================================
const express = require("express");
const app = express();
const routes = require("./controller/list_controller");
//=============================================================
// Port
//=============================================================
const PORT = process.env.PORT || 3000
//=============================================================
// Middleware
//=============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("view"));
app.use(routes);
//=============================================================
// Listener
//=============================================================
app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});