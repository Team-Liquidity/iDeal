'use strict';
function Product(name , phoneNumber , description , price) {
    this.name = name ;
    this.phoneNumber = phoneNumber ; 
    this.description = description ;
    this.price = price ;
    Product.productArr.push(this);
}

Product.productArr = [];
let btn = document.getElementById('add-products');
btn.addEventListener('submit' , addProduct);

function addProduct(event) {
    event.preventDefault();
    new Product(event.target['full-name'].value , event.target['phone'].value , event.target['description'].value , event.target['price'].value)
    console.log(event.target['image'].value);
    console.log(Product.productArr);
    localStorage.setItem('Product Object' ,JSON.stringify(Product.productArr));
}