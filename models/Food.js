const food = [
    { 'id': 101, 'name': 'Smoke Salmon', 'price': 120 },
    { 'id': 102, 'name': 'Cheese Stick', 'price': 80 },
    { 'id': 103, 'name': 'Macaroni Cheese', 'price': 69 },
    { 'id': 104, 'name': 'Cold Cut Plate', 'price': 230 },
    { 'id': 105, 'name': 'Mussel & Mornay', 'price': 125 },
    { 'id': 106, 'name': 'Tortilla Pinwheels', 'price': 100 },
    { 'id': 107, 'name': 'Creamy Artichoke', 'price': 90 },
    { 'id': 108, 'name': 'Party Shimp', 'price': 110 },
    { 'id': 109, 'name': 'Swedish Meatballs', 'price': 85 },
    { 'id': 110, 'name': 'Cheese Fries', 'price': 65 },
    { 'id': 111, 'name': 'Strip Steak', 'price': 224 },
    { 'id': 112, 'name': 'Ribeye Steak', 'price': 295 },
    { 'id': 113, 'name': 'Tenderloin Steak', 'price': 258 },
    { 'id': 114, 'name': 'Porterhouse Steak', 'price': 310 },
    { 'id': 115, 'name': 'Hanger Steak', 'price': 215 },
    { 'id': 116, 'name': 'Skirt Steak', 'price': 290 },
    { 'id': 117, 'name': 'Short Ribs Steak', 'price': 159 },
    { 'id': 118, 'name': 'Flap Steak', 'price': 199 },
    { 'id': 119, 'name': 'Flank Steak', 'price': 175 },
    { 'id': 120, 'name': 'Tri-tip Steak', 'price': 230 },
    { 'id': 121, 'name': 'Baked Ricotta Cake', 'price': 65 },
    { 'id': 122, 'name': 'Lemon Meringue Pie', 'price': 80 },
    { 'id': 123, 'name': 'Burnt Butter', 'price': 49 },
    { 'id': 124, 'name': 'Sticky Ginger Pudding', 'price': 59 },
    { 'id': 125, 'name': 'Frozen Caramel', 'price': 90 },
    { 'id': 126, 'name': 'Caramel Cake', 'price': 75 },
    { 'id': 127, 'name': 'Pastelón', 'price': 69 },
    { 'id': 128, 'name': 'Red-velvet Cupcake', 'price': 65 },
    { 'id': 129, 'name': 'Muhallabia', 'price': 65 },
    { 'id': 130, 'name': 'Mike Mcenearney', 'price': 80 },
    { 'id': 131, 'name': 'French 75', 'price': 65 },
    { 'id': 132, 'name': 'Moscow Mule', 'price': 80 },
    { 'id': 133, 'name': 'Chocolate Martini', 'price': 69 },
    { 'id': 134, 'name': 'Coca-cola', 'price': 40 },
    { 'id': 135, 'name': 'Spiked Lemonade', 'price': 35 },
    { 'id': 136, 'name': 'Bloody Mary', 'price': 69 },
    { 'id': 137, 'name': 'White Russian', 'price': 90 },
    { 'id': 138, 'name': 'Mojito', 'price': 90 },
    { 'id': 139, 'name': 'Fruit Hurricanes', 'price': 55 },
    { 'id': 140, 'name': 'Paloma', 'price': 65 }
]
class Food {
    static getFoodById(FoodID) {
        return food.filter(f => f.id == FoodID);
    }
}
module.exports = Food;