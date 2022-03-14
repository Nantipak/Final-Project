const Food = require("./Food");
const table = [
    { 'table_no': 1, 'foods': [], "totalPrice": 0 },
    { 'table_no': 2, 'foods': [], "totalPrice": 0 },
    { 'table_no': 3, 'foods': [], "totalPrice": 0 },
    { 'table_no': 4, 'foods': [], "totalPrice": 0 },
    { 'table_no': 5, 'foods': [], "totalPrice": 0 },
    { 'table_no': 6, 'foods': [], "totalPrice": 0 },
    { 'table_no': 7, 'foods': [], "totalPrice": 0 },
    { 'table_no': 8, 'foods': [], "totalPrice": 0 },
    { 'table_no': 9, 'foods': [], "totalPrice": 0 },
    { 'table_no': 10, 'foods': [], "totalPrice": 0 },
    { 'table_no': 11, 'foods': [], "totalPrice": 0 },
    { 'table_no': 12, 'foods': [], "totalPrice": 0 },
    { 'table_no': 13, 'foods': [], "totalPrice": 0 },
    { 'table_no': 14, 'foods': [], "totalPrice": 0 },
    { 'table_no': 15, 'foods': [], "totalPrice": 0 },
    { 'table_no': 16, 'foods': [], "totalPrice": 0 }
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
                targetTable[0].totalPrice += targetTable[0].foods[i].food.price;
                cnt++;
            }
        }
        if (cnt == 0) {
            const food = Food.getFoodById(FoodID);
            targetTable[0].foods.push({ "food": food[0], "qty": 1, "status": "ordered" });
            targetTable[0].totalPrice += food[0].price;
        }
    }

    static deleteFoodById(FoodID, tableNO) {
        var targetTable = table.filter(tb => tb.table_no == tableNO);
        for (let i = 0; i < targetTable[0].foods.length; i++) {
            if (targetTable[0].foods[i].food.id == FoodID) {
                targetTable[0].totalPrice -= (targetTable[0].foods[i].food.price * targetTable[0].foods[i].qty);
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