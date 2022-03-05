const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
mongoose.connect('mongodb://localhost:27017/todolistDB');

const menuSchema = new mongoose.Schema({
    id: Number,
    item: String,
    price: Number
});
const Menu = mongoose.model("menu", menuSchema);
const tableSchema = new mongoose.Schema({
    table_no: Number,
    menu: [menuSchema]
})
const Table = mongoose.model("table", tableSchema);

var currentTable = 0;

app.get("/", function(req, res) {
    console.log(currentTable);
    res.render("home", {
        table: currentTable
    });
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

app.post("/", function(req, res) {
    currentTable = req.body.table;
    res.redirect("/");
})

app.listen("3000", () => {
    console.log("Server is running on Port 3000.");
});