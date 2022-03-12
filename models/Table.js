const Food = require("./Food");
const table = [
    { 'table_no': 1, 'foods': [] },
    { 'table_no': 2, 'foods': [] },
    { 'table_no': 3, 'foods': [] },
    { 'table_no': 4, 'foods': [] },
    { 'table_no': 5, 'foods': [] },
    { 'table_no': 6, 'foods': [] },
    { 'table_no': 7, 'foods': [] },
    { 'table_no': 8, 'foods': [] },
    { 'table_no': 9, 'foods': [] },
    { 'table_no': 10, 'foods': [] },
    { 'table_no': 11, 'foods': [] },
    { 'table_no': 12, 'foods': [] },
    { 'table_no': 13, 'foods': [] },
    { 'table_no': 14, 'foods': [] },
    { 'table_no': 15, 'foods': [] },
    { 'table_no': 16, 'foods': [] }
];
class Table {
    constructor(table_no, foods) {
        this.table_no = table_no;
        this.foods = foods;
    }
    static getAllTable() {
        return table;
    }
    static getTableById(tableNO) {
        return table.filter(tb => tb.table_no == tableNO);
    }
    static addFoodToTable(FoodID, tableNO) {
        const targetTable = table.filter(tb => tb.table_no == tableNO);
        const food = Food.getFoodById(FoodID);
        targetTable[0].foods.push(food[0]);
    }
}
module.exports = Table;