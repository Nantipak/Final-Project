const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Table = require("./models/Table");
const Food = require("./models/Food");
const { updateStatus } = require("./models/Table");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var currentTable = 1;
var tmpURL;

app.get("/", function(req, res) {
    // console.log(currentTable);
    const table = Table.getTableById(currentTable);
    //console.log(table[0].foods);
    res.render("home", {
        table: currentTable,
        foods: table[0].foods
    });
})

app.get("/appetizer", function(req, res) {
    tmpURL = "/appetizer";
    res.render("appetizer-menu");
})

app.get("/maindish", function(req, res) {
    tmpURL = "/maindish";
    res.render("main-dish");
})

app.get("/dessert", function(req, res) {
    tmpURL = "/dessert";
    res.render("dessert-menu");
})

app.get("/drinks", function(req, res) {
    tmpURL = "/drinks";
    res.render("drinks-menu");
})

app.get("/login", function(req, res) {
    res.render("login");
})

app.get("/kitchen", function(req, res) {
    res.render("kitchen", {
        tables: Table.getAllTable()
    });
})

app.post("/", function(req, res) {
    currentTable = req.body.table;
    res.redirect("/");
})

app.post("/checkedout", function(req, res) {
    currentTable = 1;
    res.redirect("/");
})

app.post("/login", function(req, res) {
    res.redirect("/kitchen");
})

app.post("/deleteFood", function(req, res) {
    const foodID = req.body.deletebtn;
    // console.log(foodID);
    Table.deleteFoodById(foodID, currentTable);
    res.redirect("/");
})

app.post("/addFood", function(req, res) {
    const foodID = req.body.id;
    Table.addFoodToTable(foodID, currentTable);
    res.redirect(tmpURL);
})

app.post("/statusChange", function(req, res) {
    const foodID = req.body.id;
    const newStatus = req.body.status;
    updateStatus(foodID, currentTable, newStatus);
    res.redirect("/kitchen");
})

app.listen("3000", () => {
    console.log("Server is running on Port 3000.");
});