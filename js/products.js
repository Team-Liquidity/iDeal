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
    for(let i =0 ; i < Product.productArr.length ; i++){
    localStorage.setItem('Product Object' , JSON.stringify(Product.productArr));
    alert('Your product has been added, thank you for choosing us!');
    }
}


