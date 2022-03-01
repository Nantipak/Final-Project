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

app.get("/maindish", function(req, res) {
    res.render("main-dish");
})

app.get("/dessert", function(req, res) {
    res.render("dessert-menu");
})

app.get("/drinks", function(req, res) {
    res.render("drinks-menu");
})

app.listen("3000", () => {
    console.log("Server is running on Port 3000.");
});