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
  console.log(cart);
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  }
  for (let i = 0; i < cart.length; i++) {
    
  if (cart.length > 0) {
    console.log(`In your cart, you have ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}.`);
  }
  else if (cart.length > 1) {
    console.log(`In your cart, you have ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]} and ${Object.keys(cart[i])[1]} at $${cart[i][Object.keys(cart[i])[1]]}.`);
  }
  //while (cart.length > 2) {
   // i++;
   if (cart.length > 2) {
    console.log(`In your cart, you have ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}, ${Object.keys(cart[i])[1]} at $${cart[i][Object.keys(cart[i])[1]]}, and ${Object.keys(cart[i])[2]} at $${cart[i][Object.keys(cart[i])[2]]} `);
   }
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
