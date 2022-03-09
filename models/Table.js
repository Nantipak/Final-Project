const table = [
    { 'table_no': 0, 'foods': [{ 'id': 100, 'name': null, 'price': null }] },
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
    static getTableById(tableNO) {
        return table.filter(tb => tb.table_no == tableNO);
    }
    addfood(tableNO, FoodID) {
        const table = table.filter(tb => tb.table_no == tableNO);
        const food = food.filter(f => food.FoodID == FoodID);
        table.menu.push(food);
    }
}
module.exports = Table;