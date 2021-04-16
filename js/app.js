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
        let img = document.getElementById('p-' + i);
        pictArr.push(img);
        console.log(pictArr);
        let getQuantity = document.getElementsByClassName('quantity')[i].value;
        let getPrice = price[i].getAttribute('value');
        counter+=parseInt(getQuantity);
        let total = document.getElementsByClassName('total')[0];
        total.textContent = counter;
        totalPrice+=getQuantity*getPrice;
        console.log(getQuantity);
        console.log(getPrice);
        console.log(totalPrice);

        
    }
}

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
