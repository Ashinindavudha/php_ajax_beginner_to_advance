//run wow.js
new WOW().init();
//gobal
var products = [];
var cartItem = [];
var cart_n = document.getElementById("cart_n");
//divs
var fruitDIV = document.getElementById("fruitDIV");
var juiceDIV = document.getElementById("juiceDIV");
var saladDIV = document.getElementById("saladDIV");
//information
var FRUIT = [
  { name: "Apple", price: 1 },
  { name: "Orange", price: 1 },
  { name: "Cherry", price: 1 },
  { name: "Strawberry", price: 1 },
  { name: "Kiwi", price: 1 },
  { name: "Banana", price: 1 },
];
var JUICE = [
  { name: "Juice #1", price: 10 },
  { name: "Juice #2", price: 10 },
  { name: "Juice #3", price: 12 },
];
var SALAD = [
  { name: "Salad #1", price: 11 },
  { name: "Salad #2", price: 12 },
  { name: "Salad #3", price: 15 },
];
//html
