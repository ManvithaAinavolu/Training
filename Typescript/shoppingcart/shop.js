var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    ShoppingCart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ShoppingCart.prototype.getItems = function () {
        return this.items;
    };
    ShoppingCart.prototype.totalPrice = function () {
        return this.items.reduce(function (acc, cartItem) {
            console.log("total price", cartItem.quantity * cartItem.price);
            return acc + (cartItem.quantity * cartItem.price);
        }, 0);
    };
    return ShoppingCart;
}());
// const sc=new ShoppingCart()
// sc.getItems()
var CartItem = /** @class */ (function () {
    function CartItem(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    return CartItem;
}());
var cart = new ShoppingCart();
var product_buttons = document.querySelectorAll("button");
product_buttons.forEach(function (product_button, i) {
    var quantity_input = document.getElementById("input-quantity");
    // const quantity_input2=document.getElementById("input-quantity2") as HTMLInputElement
    // const quantity_input=document.querySelectorAll(".quantity")[index] as HTMLInputElement;
    product_button.addEventListener('click', function () {
        var name = product_button.getAttribute("data-name");
        var price = product_button.getAttribute("data-price");
        var quantity = quantity_input.value;
        console.log("quantity:", quantity);
        if (name && price && quantity) {
            var cartitem = new CartItem(name, parseFloat(price), parseFloat(quantity));
            cart.addItem(cartitem);
        }
        renderData();
    });
});
var cartItems = document.getElementById("cartItems");
var totalPrice = document.getElementById("totalPrice");
var renderData = function () {
    cartItems.innerText = "";
    cart.getItems().forEach(function (item) { return [
        cartItems.innerHTML += "<li>".concat(item.name, " &#x20b9; ").concat(item.price, "</li> quantity: ").concat(item.quantity)
    ]; });
    totalPrice.innerHTML = "&#x20b9;".concat(cart.totalPrice());
};
