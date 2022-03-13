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
        var cnt = 0;
        for (let i = 0; i < targetTable[0].foods.length; i++) {
            if (targetTable[0].foods[i].food.id == FoodID) {
                targetTable[0].foods[i].qty++;
                cnt++;
            }
        }
        if (cnt == 0) {
            const food = Food.getFoodById(FoodID);
            targetTable[0].foods.push({ "food": food[0], "qty": 1, "status": "ordered" });
        }
    }

    static deleteFoodById(FoodID, tableNO) {
        var targetTable = table.filter(tb => tb.table_no == tableNO);
        for (let i = 0; i < targetTable[0].foods.length; i++) {
            if (targetTable[0].foods[i].food.id == FoodID) {
                targetTable[0].foods.splice(i, 1);
            }
        }
    }

    static updateStatus(FoodID, tableNO, newStatus) {
        const targetTable = table.filter(tb => tb.table_no == tableNO);
        for (let i = 0; i < targetTable[0].foods.length; i++) {
            if (targetTable[0].foods[i].food.id == FoodID) {
                targetTable[0].foods[i].status = newStatus;
            }
        }
    }
}
module.exports = Table;