'use strict';

// Add to cart handler

let addButton = document.getElementsByTagName('button');
for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener('click', addToCart);

    function addToCart(event) {
        let img = document.getElementById('p-' + i);
        let getquantity = document.getElementsByClassName('quantity')[i].value;
        console.log(getquantity);
    }
}

