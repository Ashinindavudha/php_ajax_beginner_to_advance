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
function HTMLfruitProduct(con) {
  let URL = `img/fruits/fruit${con}.jpeg`;
  let btn = `btnFruits${con}`;
  return `
  <div class="col-md-4 wow zoomIn data-wow-duration="10s" data-wow-offset="240" ">
    <div class="card mb-4 shadow-sm">
    <img src="${URL}" class="card-img-top" style="height: 16rem;" alt="Card image cap">
   <div class="card-body">
    <i style="color: orange;" class="fa fa-star"></i>
    <i style="color: orange;" class="fa fa-star"></i>
    <i style="color: orange;" class="fa fa-star"></i>
    <i style="color: orange;" class="fa fa-star"></i>
    <i style="color: orange;" class="fa fa-star"></i>
<p class="card-text">${FRUIT[con - 1].name}</p>
<p class="card-text">Price: $${FRUIT[con - 1].price}.00</p>
<div class="d-flex justify-content-between align-items-center">
<div class="btn-group">
<button type="button" onclick="cart2('${FRUIT[con - 1].name}', '${
    FRUIT[con - 1].price
  }', '${URL}', '${con}', '${btn}')" class="btn btn-sm btn-ouline-secondary">
<a href="cart.php" style="color: inherit;">Buy</a>
</button>

<button type="button" onclick="cart('${FRUIT[con - 1].name}', '${
    FRUIT[con - 1].price
  }', '${URL}', '${con}', '${btn}')" class="btn btn-sm btn-ouline-secondary">
<a href="#" style="color: inherit;">Add To Card</a>
</button>
</div>
<small class="text-muted">Free Shopping</small>
</div>
</div>
</div>
</div>
  `;
}

function HTMLjuiceProduct(con) {
  let URL = `img/juice/juice${con}.jpeg`;
  let btn = `btnJuices${con}`;
  return `
  <div class="col-md-4 wow zoomIn data-wow-duration="10s" data-wow-offset="240" ">
    <div class="card mb-4 shadow-sm">
    <img src="${URL}" class="card-img-top" style="height: 16rem;" alt="Card image cap">
   <div class="card-body">
    <i style="color: orange;" class="fa fa-star"></i>
    <i style="color: orange;" class="fa fa-star"></i>
    <i style="color: orange;" class="fa fa-star"></i>
    <i style="color: orange;" class="fa fa-star"></i>
    <i style="color: orange;" class="fa fa-star"></i>
<p class="card-text">${JUICE[con - 1].name}</p>
<p class="card-text">Price: $${JUICE[con - 1].price}.00</p>
<div class="d-flex justify-content-between align-items-center">
<div class="btn-group">
<button type="button" onclick="cart2('${JUICE[con - 1].name}', '${
    JUICE[con - 1].price
  }', '${URL}', '${con}', '${btn}')" class="btn btn-sm btn-ouline-secondary">
<a href="cart.html" style="color: inherit;">Buy</a>
</button>

<button type="button" onclick="cart('${JUICE[con - 1].name}', '${
    JUICE[con - 1].price
  }', '${URL}', '${con}', '${btn}')" class="btn btn-sm btn-ouline-secondary">
<a href="#" style="color: inherit;">Add To Card</a>
</button>
</div>
<small class="text-muted">Free Shopping</small>
</div>
</div>
</div>
</div>
  `;
}

function HTMLsaladProduct(con) {
  let URL = `img/salads/salad${con}.jpeg`;
  let btn = `btnSalads${con}`;
  return `
  <div class="col-md-4 wow zoomIn data-wow-duration="10s" data-wow-offset="240" ">
    <div class="card mb-4 shadow-sm">
    <img src="${URL}" class="card-img-top" style="height: 16rem;" alt="Card image cap">
   <div class="card-body">
    <i style="color: orange;" class="fa fa-star"></i>
    <i style="color: orange;" class="fa fa-star"></i>
    <i style="color: orange;" class="fa fa-star"></i>
    <i style="color: orange;" class="fa fa-star"></i>
    <i style="color: orange;" class="fa fa-star"></i>
<p class="card-text">${SALAD[con - 1].name}</p>
<p class="card-text">Price: $${SALAD[con - 1].price}.00</p>
<div class="d-flex justify-content-between align-items-center">
<div class="btn-group">
<button type="button" onclick="cart2('${SALAD[con - 1].name}', '${
    SALAD[con - 1].price
  }', '${URL}', '${con}', '${btn}')" class="btn btn-sm btn-ouline-secondary">
<a href="cart.html" style="color: inherit;">Buy</a>
</button>

<button type="button" onclick="cart('${SALAD[con - 1].name}', '${
    SALAD[con - 1].price
  }', '${URL}', '${con}', '${btn}')" class="btn btn-sm btn-ouline-secondary">
<a href="#" style="color: inherit;">Add To Card</a>
</button>
</div>
<small class="text-muted">Free Shopping</small>
</div>
</div>
</div>
</div>
  `;
}
// ANIMATION
function animation() {
  const toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
  });
  toast({
    type: "success",
    title: "Added to Shopping Cart",
  });
}
