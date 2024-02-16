// Scripts 


let products = [

    {
      name: 'Rasberries',
      price: 4,
      quantity: 0,
      productId: 1,
      image: 'https://fruve.co.uk/cdn/shop/products/Raspberries_grande.jpg?v=1592936093'
    },
    {
      name: 'Apple',
      price: 1.50,
      quantity: 0,
      productId: 2,
      image: 'https://www.cmiapples.com/ecom_img/original-12-9-pinklady-single.jpg'
    },
    {
      name: 'Strawberries',
      price: 4.50,
      quantity: 0,
      productId: 3,
      image: 'https://www.naturespride.eu/media/tz2n1miw/aardbeien-productfoto.jpg?anchor=center&mode=crop&width=560&height=560&rnd=132442055056230000'
    }
  ];
  
let cart = [];

function AddTocart (productId) {
    for (let i = 0 ; i< products.length; i++) {

    
        if(products[i].productId == productId){
        
           if(cart.includes(products[i])){
                IncreaseQuantity(productId)
                return
           }
           else{
            products[i].quantity += 1;
            cart.push(products[i]);
            return
           
           }

           
        }

    }
 
}

function IncreaseQuantity(productId) {
 
    let product = cart.find(product => product.productId == productId)

    if(product){
     
        product.quantity +=1
    }


}


function DecreaceQuantity(productId) {
 
    let product = cart.find(product => product.productId == productId)

    if(product){
     
        product.quantity -=1
    }


}











// displaying products 
const currencySymbol = "$";
function DrawProducts(){
    
    let listproducts = document.querySelector("#products")
    let productItems = ''
    products.forEach((element) => {
        productItems += `
            <div class="w-[200px] my-4 p-7 bg-gray-200 " data-productId='${element.productId}'>
                <img class = "rounded" src='${element.image}'>
                <h3 class = "my-2" >${element.name}</h3>
                <p class = "my-2">price: ${currencySymbol}${element.price}</p>
                <button  class="add-to-cart px-4 py-2 bg-white rounded">Add to Cart</button>
            </div>
        `;
    });

    listproducts.innerHTML = productItems
}

DrawProducts()

document.querySelector("#products").addEventListener("click", (e)=>{
    let productId = e.target.parentNode.getAttribute("data-productId")
    AddTocart(productId)
    DrawCarts()
})

//increase btn cart
document.querySelector("#carts").addEventListener("click", (e)=>{
    let productId = e.target.parentNode.getAttribute("data-productId")
 IncreaseQuantity(productId)
})

// add to cart
function DrawCarts(){
    let liscarts = document.querySelector("#carts")
    let cartsItems = ''
    console.log(cart)
    cart.forEach((element) => {
        cartsItems += `
            <div class="w-[200px] my-4 p-7 bg-gray-200 " data-productId='${element.productId}'>
            <h1>${element.productId}</h1>
                <h3 class = "my-2" >${element.name}</h3>
                <p class = "my-2">price: ${currencySymbol}${element.price}</p>
                <p class = "my-2">Quantity: ${element.quantity}</p>
                <div class= "flex gap-2 justify-center">
                    <button data-productId='${element.productId} class="increase px-2 bg-white rounded">+</button><button  class="px-2 bg-white rounded">-</button>
                </div>
            </div>
        `;
    });

    liscarts.innerHTML = cartsItems

    if(cart){
        document.querySelector(".increase").addEventListener("click", (e)=>{
      
            // let productId = e.target.getAttribute("data-productId")
            // console.log(productId)
            IncreaseQuantity(productId)
        })
    }
 
}




