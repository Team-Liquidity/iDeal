'use strict';

// Add to cart handler

let addButton = document.getElementsByTagName('button');
let counter = 0;
for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener('click', addToCart);

    function addToCart(event) {
        let img = document.getElementById('p-' + i);
        let getquantity = document.getElementsByClassName('quantity')[i].value;
        counter+=parseInt(getquantity);
        let total = document.getElementsByClassName('total')[0];
        total.textContent = counter;
        console.log(counter);
    }
}

