let imgContainer = document.getElementById('img-container')
let newSales = localStorage.getItem('Product Object');
let objNewSales = JSON.parse(newSales);
console.log(imgContainer);
function render (){
    console.log(imgContainer);
    for(let i = 0 ; i < newSales[0].length ; i++){
    let imgElmt = document.createElement('img');
    imgElmt.setAttribute('src' , objNewSales[0].img);
    console.log(objNewSales);
    imgContainer.appendChild(imgElmt);
    
    let description = document.createElement('p');
    description.textContent = objNewSales[0].description;
    imgContainer.appendChild(description);
    
    let priceLabel = document.createElement('label');
    priceLabel.textContent = objNewSales[0].price + ' JOD';
    imgContainer.appendChild(priceLabel);
    
    let quantityInput = document.createElement('input');
    quantityInput.setAttribute('type' , 'number');
    imgContainer.appendChild(quantityInput);
    
    let plusButton = document.createElement('button');
    plusButton.textContent = '+';
    imgContainer.appendChild(plusButton);
    }
    
        localStorage.removeItem('Product Object');
    }
        render();