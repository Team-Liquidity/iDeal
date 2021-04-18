'use strict';

// Add to cart handler
let price = document.getElementsByClassName('price');
let addButton = document.getElementsByTagName('button');
let counter = 0;
let totalPrice = 0;
let pictArr = [];
let srcImg = [];
let quantityArr =[];
let priceArr=[];
let getQuantity=0;



for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener('click', addToCart);

    function addToCart(event) {
        let img = document.getElementById('p-' + i).getAttribute('src'); // returns the source of the image 
        console.log(img);
        pictArr.push(img); //add the product picture to the pictArr
        console.log(pictArr);
        //   srcImg.push(img.src);
           console.log(pictArr);
        getQuantity = document.getElementsByClassName('quantity')[i].value; // gets the quantity of bought products
        pictArr.push(getQuantity);
        quantityArr.push(getQuantity);
        console.log(pictArr);
        let getPrice = price[i].getAttribute('value'); //price per product
        priceArr.push(getPrice);
        counter += parseInt(getQuantity); // parse the value to an integer
        let total = document.getElementsByClassName('total')[0];
        total.textContent = counter;
        totalPrice += getQuantity * getPrice;
        updateStorage();
        console.log(totalPrice);
        /*console.log(getQuantity);
        console.log(getPrice);
        console.log(totalPrice);*/
    }

}
//################################################################
function updateStorage() {
    let arrString;
    let quantityString;
    let priceString;
    arrString = JSON.stringify(pictArr);
    quantityString=JSON.stringify(quantityArr);
    priceString=JSON.stringify(priceArr)
    localStorage.setItem('products', arrString);
    localStorage.setItem('quantity',quantityString);
    localStorage.setItem('price',priceString);
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

        let imagElement = document.createElement('img');
        imagElement.setAttribute('width', '200px');
        imagElement.setAttribute('height', '200px');
        productsEl.appendChild(imagElement);
        imagElement.setAttribute('src', pictArr[i]);
        srcImg.push(imagElement.src);

      //  console.log(srcImg);
       /* getbreack:if (srcImg[i] === imagElement.src) {
            break getbreack;
        } else {
            continue;
        }*/
      
        
    }
}




function renderTable (){
    let parent = document.getElementById('table-product');
let table = document.createElement('table');
parent.appendChild(table);



let firstRow = document.createElement('tr');
         table.appendChild(firstRow);
         let thPrice = document.createElement('th');
         firstRow.appendChild(thPrice);
         thPrice.textContent='Price';

         let thProductPrice = document.createElement('th');
         firstRow.appendChild(thProductPrice);
         thProductPrice.textContent=localStorage.getItem('price');

let secondRow = document.createElement('tr');
         table.appendChild(secondRow);
         secondRow.textContent='Quantity';


}



renderTable();





getProducts();
cartRendering();



let purchaseForm = document.getElementById('cart-form');
purchaseForm.addEventListener('submit', createInvoice);

function createInvoice(event) {
    event.preventDefault();
    let name = event.target['name'].value;
    let phoneNumber = event.target['number'].value;
    let address = event.target['address1'].value;
    let payPal = event.target['paypal'].checked;
    let cash = event.target['cash'].checked;
    let visa = event.target['visa'].checked;

    renderInvoice();
}


// function renderInvoice(){
    //}