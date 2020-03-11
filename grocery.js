var Grocery = /** @class */ (function () {
    function Grocery(name, price, quanity, itemDescription) {
        this.name = name;
        this.price = price;
        this.quanity = quanity;
        this.itemDescription = itemDescription;
        console.log(name + " " + price + " " + quanity + " " + itemDescription);
    }
    return Grocery;
}());
function getGroceryItem(item) {
    return "Item: " + item.itemDescription + " " + item.name + ", Price: $" + item.price + ", " + "Quanity: " +
        item.quanity;
}
var foodList = [
    new Grocery("Eggs", "3.00", 2, "Large Brown"),
    new Grocery("Bread", "4.39", 2, "Wheat"),
    new Grocery("Milk", "1.19", 1, "Chocolate"),
    new Grocery("Carrots", "1.25", 2, "Baby"),
    new Grocery("Sugar", "2.99", 1, "Organic"),
    new Grocery("Brownies", "4.99", 1, "Dark Chocolate")
];
var listContent;
listContent = "";
for (var i = 0; foodList.length > i; i++) {
    listContent += "<br>" + getGroceryItem(foodList[i]) + "<br>";
}
document.body.innerHTML = listContent;
