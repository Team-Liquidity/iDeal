'use strict';

// ******************************************** PRDUCTS JS ****************************************
function Product(name, phoneNumber, description, price, img) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.description = description;
    this.price = price;
    this.img = img;
    Product.productArr.push(this);
}
Product.productArr = [];
let btn = document.getElementById('add-products');
btn.addEventListener('submit', addProduct);
console.log('samer comment' ,Product.productArr);
function addProduct(event) {
    if(Product.productArr)
    event.preventDefault();
    let fullName  = event.target['full-name'].value;
    let phoneNumber  = event.target['phone'].value;
    let description  = event.target['description'].value;
    let price  = event.target['price'].value;
    let img = '../img/products/newProduct.jpg';
    new Product(fullName , phoneNumber , description , price , img);
    console.log(Product.productArr);
    let stringObject = JSON.stringify(Product.productArr);
    console.log(stringObject);
        localStorage.setItem('Product Object',stringObject);
        swal('Process Succeed' , 'Your product has been added, thank you for choosing us!');
}
console.log(Product.productArr);

gettingItems();
function gettingItems() {    
    let getItems = localStorage.getItem('Product Object');
    let stringObj = JSON.parse(getItems);
    console.log(getItems);
    if (stringObj) {
        Product.productArr = stringObj;
    }

}

