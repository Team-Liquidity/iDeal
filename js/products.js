let productForm = document.getElementById('add-products');
let submitElement=document.getElementById('addproducts');
let showingProduct = document.getElementById('our-products');
console.log(showingProduct);
// global array to push the products into it
 Product.productArr = [];
// constructor function to add products from users
function Product(name ,phone ,discription,price, image){
this.name=name;
this.phone=phone;
this.discription=discription;
this.price=price;
this.image=image;
Product.productArr.push(this);
updateStorage();
}

function updateStorage(){
    let arrayString=JSON.stringify(Product.productArr);
    localStorage.setItem('product',arrayString);
}

function getProducts (){
let data = localStorage.getItem('product');
let productData = JSON.parse(data);
if (productData !==null ){
    Product.productArr=productData;
}
renderProducts();
}

submitElement.addEventListener('submit',handleSubmit);
function handleSubmit (event){
    event.preventDefult();

    //get all the value from the form
    let item = event.target;
    let name= item.name.value;
    let phone=item.phone.value;
    let discription= item.discription.value;
    let price = item.price.value;
    let image=item.image.value;
    new Product(name,phone,discription,price,image);

    renderProducts();
}
 
function renderProducts(){
    let imageElement = document.createElement('img');
    // showingProduct.appendChild(imageElement);
    // imageElement.setAttribute('src','img/products/p-0-a.jpg');
    console.log(showingProduct);
   // for (let i = 0; i < Product.productArr.length; i++) {
      //  showingProduct.textContent=`${Product.productArr[i].name} \n ${Product.productArr[i].phone} \n ${Product.productArr[i].discription} \n ${Product.productArr[i].price} \n ${Product.productArr[i].image}`;
        
  //  }

}

getProducts();