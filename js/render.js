let imgContainer = document.getElementById('img-container')
let newSales = localStorage.getItem('Product Object');
let objNewSales = JSON.parse(newSales);
function render (){
    for(let i = 0 ; i < objNewSales.length ; i++){
    let fieldSet = document.createElement('fieldset');
    imgContainer.appendChild(fieldSet);
    let imgElmt = document.createElement('img');
    imgElmt.setAttribute('src' , objNewSales[0].img);
    fieldSet.appendChild(imgElmt);
    
    let description = document.createElement('p');
    description.textContent = objNewSales[0].description;
    fieldSet.appendChild(description);
    
    let priceLabel = document.createElement('label');
    priceLabel.textContent = objNewSales[0].price + ' JOD';
    fieldSet.appendChild(priceLabel);
    
    let quantityInput = document.createElement('input');
    quantityInput.setAttribute('type' , 'number');
    fieldSet.appendChild(quantityInput);
    
    let plusButton = document.createElement('button');
    plusButton.textContent = '+';
    fieldSet.appendChild(plusButton);
    }
    
    }

    render();


