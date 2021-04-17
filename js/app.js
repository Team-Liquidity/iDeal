'use strict';

// Add to cart handler
let price = document.getElementsByClassName('price');
let addButton = document.getElementsByTagName('button');
let counter = 0;
let totalPrice = 0;
let pictArr = [];
// let cartArr = [];


for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener('click', addToCart);

    function addToCart(event) {
        let img = document.getElementById('p-' + i).getAttribute('src');
        console.log(img);
        pictArr.push(img);
        console.log(pictArr);
        let getQuantity = document.getElementsByClassName('quantity')[i].value;
        let getPrice = price[i].getAttribute('value');
        counter += parseInt(getQuantity);
        let total = document.getElementsByClassName('total')[0];
        total.textContent = counter;
        totalPrice += getQuantity * getPrice;
        updateStorage();
        console.log(pictArr);
        /*console.log(getQuantity);
        console.log(getPrice);
        console.log(totalPrice);*/
    }

}
//################################################################
function updateStorage() {
    let arrString;
    // for (let i = 0; i < pictArr.length; i++) {

        arrString = JSON.stringify(pictArr);
        localStorage.setItem('products', arrString)
    // }

}
//###############################################################    
function getProducts() {
    let data = localStorage.getItem('products');
    let productsdata = JSON.parse(data);
    if (productsdata !== null) {
        pictArr = productsdata;

    }
    return productsdata;

}
//let productsdata=getProducts();
//getProducts();
//console.log(productsdata);
//################################################################

function cartRendering() {
    let productsEl = document.getElementById('cart-product');
    for(let i = 0 ; i < pictArr.length ; i++) {
        let imagelement = document.createElement('img');
        imagelement.setAttribute('width' , '200px');
        imagelement.setAttribute('height' , '200px');
        productsEl.appendChild(imagelement);
        imagelement.setAttribute('src' , pictArr[i]);
    }
}
getProducts();
cartRendering();

// let buttonCart = document.getElementById('moveToCart');

// buttonCart.addEventListener('submit', moveToCart);

//         function moveToCart(event){
//         event.preventDefault();
//         cartArr.push(buttonCart);
//         console.log(cartArr);
//         let getCart = document.getElementsByClassName(total);
//         console.log(getCart);


//         }

//         moveToCart();
