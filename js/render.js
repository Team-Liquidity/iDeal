'use strict'

let newSales = localStorage.getItem('Product Object');
let objNewSales = JSON.parse(newSales);
let parentContainer = document.getElementById('new-container');
let imgElmt = document.createElement('img');
imgElmt.setAttribute('src' , objNewSales[0].img);
console.log(objNewSales);
parentContainer.appendChild(imgElmt);

let description = document.createElement('p');
description.textContent = objNewSales[0].description;
parentContainer.appendChild(description);

let priceLabel = document.createElement('label');
priceLabel.textContent = objNewSales[0].price + ' JOD';
parentContainer.appendChild(priceLabel);

let quantityInput = document.createElement('input');
quantityInput.setAttribute('type' , 'number');
parentContainer.appendChild(quantityInput);

let plusButton = document.createElement('button');
plusButton.textContent = '+';
parentContainer.appendChild(plusButton);
