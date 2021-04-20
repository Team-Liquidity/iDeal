// let table = document.getElementById('purchases-table');
// table.appendChild(firstRow);
// function renderTable() {
//     let 
//     let tdImg = document.createElement('td');
//     firstRow.appendChild(tdImg);
//     tdImg.textContent = pictArr.img;
//     let thPrice = document.createElement('td');
//     firstRow.appendChild(thPrice);
//     thPrice.textContent = pictArr.getPrice;
//     let thQuantity = document.createElement('td');
//     firstRow.appendChild(thQuantity);
//     thQuantity.textContent =pictArr.getQuantity;
//     let thtotal = document.createElement('td');
//     firstRow.appendChild(thtotal);
//     thtotal.textContent = pictArr.total;
// }
// let imagelement = 0;
// function cartRendering() {
//     let productsEl = document.getElementById('cart-product');
//     for (let i = 0; i < pictArr.length; i++) {
//         imagelement = document.createElement('img');
//         imagelement.setAttribute('width', '200px');
//         imagelement.setAttribute('height', '200px');
//         productsEl.appendChild(imagelement);
//         imagelement= imagelement.setAttribute('src', pictArr[i]);
//     }
// }
// getProducts();
// cartRendering(); 
// renderTable();

let ourProducts = localStorage.getItem('products');
let imgProducts = JSON.parse(ourProducts);
let priceTotal = 0;
let quantityTotal = 0;

let productsEl = document.getElementById('purchases-table');
function cartRendering() {
    let productsString = localStorage.getItem('products');
    let products = JSON.parse(productsString);
    console.log(products);
    for (let i = 0 ; i < products.length ; i++){
    for(let i = 0 ; i < products[i].length ; i++) {
        let tableRow = productsEl.appendChild(document.createElement('tr'));
    let productImage = document.createElement('img');
    let tableDataImg = tableRow.appendChild(document.createElement('td'));
    tableDataImg.appendChild(productImage);
    productImage.setAttribute('src' , products[i][0]);
    productImage.setAttribute('width' , '100px');
    productImage.setAttribute('height' , '100px');
    let tableDataPrice = tableRow.appendChild(document.createElement('td'));
    tableDataPrice.textContent = products[i][2] + ' JOD';
    let tableDataQuantity = tableRow.appendChild(document.createElement('td'));
    tableDataQuantity.textContent = products[i][1] + ' Product/s';
    quantityTotal += parseInt(products[i][1]);
    let tableDataTotal = tableRow.appendChild(document.createElement('td'));
    tableDataTotal.textContent = products[i][3] + ' JOD' ;
    priceTotal += parseInt(products[i][3]);
}
    }

}

cartRendering();


// gettingItemsCart();
// function gettingItemsCart() {    
//     let getItems = localStorage.getItem('quantityEach');
//     let stringObj = JSON.parse(getItems);
//     console.log(stringObj);
//     if (stringObj) {
//         quantityArr = stringObj;
//     }

//     let getItems2 = localStorage.getItem('priceEach');
//     let stringObj2 = JSON.parse(getItems2);
//     console.log(stringObj2);
//     if (stringObj2) {
//         priceArr = stringObj2;
//     }
// }