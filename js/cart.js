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


let productsEl = document.getElementById('purchases-table');
function cartRendering() {
}

cartRendering();