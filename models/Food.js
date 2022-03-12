const food = [
    { 'id': 101, 'name': 'smoke salmon', 'price': 120 },
    { 'id': 102, 'name': 'cheese stick', 'price': 80 },
    { 'id': 103, 'name': 'macaroni cheese', 'price': 69 },
    { 'id': 104, 'name': 'cold cut plate', 'price': 230 },
    { 'id': 105, 'name': 'mussel & mornay', 'price': 125 },
    { 'id': 106, 'name': 'tortilla pinwheels', 'price': 100 },
    { 'id': 107, 'name': 'creamy artichoke', 'price': 90 },
    { 'id': 108, 'name': 'party shimp', 'price': 110 },
    { 'id': 109, 'name': 'swedish meatballs', 'price': 85 },
    { 'id': 110, 'name': 'cheese fries', 'price': 65 },
    { 'id': 111, 'name': 'strip steak', 'price': 224 },
    { 'id': 112, 'name': 'ribeye', 'price': 295 },
    { 'id': 113, 'name': 'tenderloin steak', 'price': 258 },
    { 'id': 114, 'name': 'porterhouse steak', 'price': 310 },
    { 'id': 115, 'name': 'hanger steak', 'price': 215 },
    { 'id': 116, 'name': 'skirt steak', 'price': 290 },
    { 'id': 117, 'name': 'short ribs', 'price': 159 },
    { 'id': 118, 'name': 'flap steak', 'price': 199 },
    { 'id': 119, 'name': 'flank steak', 'price': 175 },
    { 'id': 120, 'name': 'tri-tip', 'price': 230 },
    { 'id': 121, 'name': 'baked ricotta cake', 'price': 65 },
    { 'id': 122, 'name': 'lemon meringue pie', 'price': 80 },
    { 'id': 123, 'name': 'burnt butter', 'price': 49 },
    { 'id': 124, 'name': 'sticky ginger pudding', 'price': 59 },
    { 'id': 125, 'name': 'frozen caramel', 'price': 90 },
    { 'id': 126, 'name': 'caramel cake', 'price': 75 },
    { 'id': 127, 'name': 'pastelón', 'price': 69 },
    { 'id': 128, 'name': 'red-velvet cupcake', 'price': 65 },
    { 'id': 129, 'name': 'muhallabia', 'price': 65 },
    { 'id': 130, 'name': 'mike mcenearney', 'price': 80 },
    { 'id': 131, 'name': 'french 75', 'price': 65 },
    { 'id': 132, 'name': 'moscow mule', 'price': 80 },
    { 'id': 133, 'name': 'chocolate martini', 'price': 69 },
    { 'id': 134, 'name': 'coca-cola', 'price': 40 },
    { 'id': 135, 'name': 'spiked lemonade', 'price': 35 },
    { 'id': 136, 'name': 'bloody mary', 'price': 69 },
    { 'id': 137, 'name': 'white russian', 'price': 90 },
    { 'id': 138, 'name': 'mojito', 'price': 90 },
    { 'id': 139, 'name': 'fruit hurricanes', 'price': 55 },
    { 'id': 140, 'name': 'paloma', 'price': 65 }
]
class Food {
    static getFoodById(FoodID) {
        return food.filter(f => f.id == FoodID);
    }
}
module.exports = Food;