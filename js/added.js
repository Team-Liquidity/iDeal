'use strict';

function ProductNew(name, phoneNumber, description, price, img) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.description = description;
    this.price = price;
    this.img = img;
    if (ProductNew.objNewProduct == null) {
        ProductNew.objNewProduct = [];
    }
    updateStorage()
    ProductNew.objNewProduct.push(this);

}
ProductNew.objNewProduct = [];
new ProductNew('new', '0777-7777-777', 'hi', '20', '../img/new-products/images (1).jpg');
new ProductNew('picture', '0777-7777-777', 'picture-wall', '20', '../img/new-products/images (2).jpg');
new ProductNew('new', '0777-7777-777', 'hi', '20', '../img/new-products/images (3).jpg');
new ProductNew('Dream catcher', '0777-7777-777', 'Dream catcher', '10', '../img/new-products/images (4).jpg');
new ProductNew('Mask', '0777-7777-777', 'Mask', '3', '../img/new-products/images (5).jpg');
new ProductNew('Wall shelf', '0777-7777-777', 'Wall shelf', '15', '../img/new-products/images.jpg');
new ProductNew('Wooden hand', '0777-7777-777', 'Wooden hand', '30', '../img/new-products/photo-1509307191386-b0bf1fc15f9d.jpg');
new ProductNew('Sofa pillows', '0777-7777-777', 'Sofa pillows', '40', '../img/new-products/photo-1572427734891-5592aae758b2.jpg');
new ProductNew('Organize rack', '0777-7777-777', 'Organize rack', '30', '../img/new-products/photo-1593853995416-1e377343f0f7.jpg');
new ProductNew('Lantern', '0777-7777-777', 'Lantern', '20', '../img/new-products/photo-1612176894219-8493bf9b9b1c.jpg');
new ProductNew('Land escape', '0777-7777-777', 'Land escape', '20', '../img/new-products/photo-1615877514364-19934dc4143b.jpg');
new ProductNew('Vasa', '0777-7777-777', 'Vasa', '40', '../img/new-products/photo-1616748467068-3211ac33b0f2.jpg');
new ProductNew('Straw basket', '0777-7777-777', 'Straw basket', '60', '../img/new-products/photo-1616837376407-08bc11cf7d17.jpg');
new ProductNew('Straw baskets', '0777-7777-777', 'Straw baskets', '40', '../img/new-products/photo-1617754590035-fc04011ef42b.jpg');
new ProductNew('Basket carrier', '0777-7777-777', 'Basket carrier', '75', '../img/new-products/photo-1617791169544-1ba998b069e4.jpg');
new ProductNew('Vasa', '0777-7777-777', 'hi', '55', '../img/new-products/photo-1618377384779-08d3ffb3d21f.jpg');
new ProductNew('Sofa pillows', '0777-7777-777', 'Sofa pillows', '20', '../img/new-products/photo-1618377385526-83312906f0dc.jpg');
new ProductNew('pig Vasa', '0777-7777-777', 'pig Vasa', '20', '../img/new-products/photo-1618580747643-7ecc7240ba4e.jpg');
console.log(ProductNew.objNewProduct);


function updateStorage() {
    let arrString = JSON.stringify(ProductNew.objNewProduct);
    localStorage.setItem('new products', arrString);

}

function getProducts() {
    let data = localStorage.getItem('new products');
    let productsdata = JSON.parse(data);

    if (productsdata !== null) {
        data = ProductNew.objNewProduct;

    }
}

getProducts();
let imgElement = document.getElementById('new-product');

function renderNewProduct() {
    for (let i = 0; i < ProductNew.objNewProduct.length; i++) {
        let fieldSet = document.createElement('fieldset');
        imgElement.appendChild(fieldSet);
        let newImg = document.createElement('img');
        console.log(newImg);
        newImg.setAttribute('src', ProductNew.objNewProduct[i].img);
        fieldSet.appendChild(newImg);

        let description = document.createElement('p');
        description.textContent = ProductNew.objNewProduct[i].description;
        fieldSet.appendChild(description);

        let priceLabel = document.createElement('label');
        priceLabel.textContent = ProductNew.objNewProduct[i].price + ' JOD';
        fieldSet.appendChild(priceLabel);

        let quantityInput = document.createElement('input');
        quantityInput.setAttribute('type', 'number');
        fieldSet.appendChild(quantityInput);

        let plusButton = document.createElement('button');
        plusButton.textContent = '+';
        fieldSet.appendChild(plusButton);
    }
}


renderNewProduct();