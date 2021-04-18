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
        let img = document.getElementById('p-' + i).getAttribute('src'); // returns the source of the image 
        console.log(img);
        pictArr.push(img); //add the product picture to the pictArr
        console.log(pictArr);
        let getQuantity = document.getElementsByClassName('quantity')[i].value; // gets the quantity of bought products
        let getPrice = price[i].getAttribute('value'); //price per product
        counter += parseInt(getQuantity); // parse the value to an integer
        let total = document.getElementsByClassName('total')[0];
        total.textContent = counter;
        totalPrice += getQuantity * getPrice;
        updateStorage();
        console.log(totalPrice);
        /*console.log(getQuantity);
        console.log(getPrice);
        console.log(totalPrice);*/
        if(getQuantity>0){
            alert(`You added ${getQuantity} products to the cart`)
        }

        }

}
//################################################################
function updateStorage() {
    let arrString;
        arrString = JSON.stringify(pictArr);
        localStorage.setItem('products', arrString);
        let totalP = totalPrice;
        localStorage.setItem('total' , JSON.stringify(totalP));
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
