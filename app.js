const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
})

app.get("/appetizer", function(req, res) {
    res.render("appetizer-menu");
})

app.listen("3000", () => {
    console.log("Server is running on Port 3000.");
});