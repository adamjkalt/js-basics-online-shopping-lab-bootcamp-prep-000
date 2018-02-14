var cart = [];

function getCart() {
return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
let itemPrice = Math.floor(Math.random() * 101);
var itemName = {};
itemName[item] = itemPrice;
cart.push(itemName);
console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
let currentCart = [];
if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
  } else {
for (var i in cart) {
      var itemKey = Object.keys(cart[i])[0];
      var itemValue = cart[i][itemKey];
      currentCart.push(`${itemKey} at \$${itemValue}`);
    }
   if (cart.length === 1) {
console.log(`In your cart, you have ${currentCart[0]}.`);
}
else if (cart.length === 2) {
console.log(`In your cart, you have ${currentCart[0]} and ${currentCart[1]}.`);
}
else if (currentCart.length > 2) {
    var endItem = currentCart.pop();
    console.log(`In your cart, you have ${currentCart.join(", ")}, and ${endItem}.`);
  }
  }
}


function total() {
for (var i in cart) {
      var itemKey = Object.keys(cart[i])[0];
      var itemValue = cart[i][itemKey];
console.log(itemKey.length);
}
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
