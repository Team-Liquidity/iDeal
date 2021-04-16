'use strict';

// ******************************************** PRDUCTS JS ****************************************
function Product(name , phoneNumber , description , price , img) {
    this.name = name ;
    this.phoneNumber = phoneNumber ; 
    this.description = description ;
    this.price = price;
    this.img = img;
    Product.productArr.push(this);
}

Product.productArr = [];
let btn = document.getElementById('add-products');
btn.addEventListener('submit' , addProduct);

function addProduct(event) {
    event.preventDefault();
    new Product(event.target['full-name'].value , event.target['phone'].value , event.target['description'].value , event.target['price'].value ,'../img/products/newProduct.jpg');
    console.log(Product.productArr);
    localStorage.setItem('Product Object' ,JSON.stringify(Product.productArr));
    render();
    
}


function render (){
    let newSales = localStorage.getItem('Product Object');
    let objNewSales = JSON.parse(newSales);
    let parentContainer = document.getElementById('img-container');
    console.log(parentContainer);
    // for(let i = 0 ; i < newSales[0].length ; i++){
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
    // }
    
    }
