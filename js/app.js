'use strict';

// Add to cart handler
let price = document.getElementsByClassName('price');
let addButton = document.getElementsByTagName('button');
let counter = 0;
let totalPrice = 0;
let pictArr = [];
let getQuantity = 0;
let total = document.getElementsByClassName('total')[0]; ;


for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener('click', addToCart);


    function addToCart(event) {
        let img = document.getElementById('p-' + i).getAttribute('src'); // returns the source of the image 
        console.log(img);
        pictArr.push(img); //add the product picture to the pictArr
        console.log(pictArr);
        getQuantity = document.getElementsByClassName('quantity')[i].value; // gets the quantity of bought products
        let getPrice = price[i].getAttribute('value'); //price per product
        counter += parseInt(getQuantity); // parse the value to an integer
        total.textContent = counter;
        totalPrice += getQuantity * getPrice;
        updateStorage();
        localStorage.setItem('Quantity counter' , JSON.stringify(counter));
        if (getQuantity > 0) {
            alert(`You added ${getQuantity} products to the cart`)
        }

    }

}
total.textContent =localStorage.getItem('Quantity counter');

//################################################################
function updateStorage() {
    let arrString;

    arrString = JSON.stringify(pictArr);
    localStorage.setItem('products', arrString);

    let totalP = totalPrice;
    localStorage.setItem('total', JSON.stringify(totalP));
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
    for (let i = 0; i < pictArr.length; i++) {

        let imagelement = document.createElement('img');
        imagelement.setAttribute('width', '200px');
        imagelement.setAttribute('height', '200px');
        productsEl.appendChild(imagelement);
        imagelement.setAttribute('src', pictArr[i]);

    }
}




// function renderTable() {
//     let parent = document.getElementById('table-product');
//     let table = document.createElement('table');
//     parent.appendChild(table);



//     let firstRow = document.createElement('tr');
//     table.appendChild(firstRow);
//     let thPrice = document.createElement('th');
//     firstRow.appendChild(thPrice);
//     thPrice.textContent = 'Price';

//     let thProductPrice = document.createElement('th');
//     firstRow.appendChild(thProductPrice);
//     thProductPrice.textContent = localStorage.getItem('price');

//     let secondRow = document.createElement('tr');
//     table.appendChild(secondRow);
//     secondRow.textContent = 'Quantity';


// }



// renderTable();





getProducts();
cartRendering();



let purchaseForm = document.getElementById('cart-form');
purchaseForm.addEventListener('submit', createInvoice);
let fullName = '';
let phoneNumber = '';
let address = '';
let payPal = '';
let cash = '';
let visa = '';

function createInvoice(event) {
    event.preventDefault();
    fullName = event.target['name'].value;
    phoneNumber = event.target['number'].value;
    address = event.target['address1'].value;
    payPal = event.target['paypal'].checked;
    cash = event.target['cash'].checked;
    visa = event.target['visa'].checked;

    renderInvoice();
}

let tablePaernt = document.getElementById('invoice')


function renderInvoice() {
    let itemQuantity = localStorage.getItem('Quantity counter');
    let invoiceTotal = localStorage.getItem('total');
    let tableRow = tablePaernt.appendChild(document.createElement('tr'));

    tableRow.appendChild(document.createElement('td')).textContent = fullName;

    tableRow.appendChild(document.createElement('td')).textContent = phoneNumber;

    tableRow.appendChild(document.createElement('td')).textContent = address;

    tableRow.appendChild(document.createElement('td')).textContent = itemQuantity + ' Products';

    tableRow.appendChild(document.createElement('td')).textContent = invoiceTotal + ' JOD';
    if (visa) {
        tableRow.appendChild(document.createElement('td')).textContent = 'Visa';
    }
    else if (cash) {
        tableRow.appendChild(document.createElement('td')).textContent = 'Cash';
    }

    else {
        tableRow.appendChild(document.createElement('td')).textContent = 'PayPal';
    }

    localStorage.removeItem('products');
    localStorage.removeItem('Quantity counter');
    localStorage.removeItem('products');


}


console.log(totalPrice);
