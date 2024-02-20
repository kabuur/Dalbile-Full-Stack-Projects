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
      price: 1,
      quantity: 0,
      productId: 2,
      image: 'https://www.cmiapples.com/ecom_img/original-12-9-pinklady-single.jpg'
    },
    {
      name: 'Strawberries',
      price: 4,
      quantity: 0,
      productId: 3,
      image: 'https://www.naturespride.eu/media/tz2n1miw/aardbeien-productfoto.jpg?anchor=center&mode=crop&width=560&height=560&rnd=132442055056230000'
    },
    {
        name: 'Banana',
        price: 3,
        quantity: 0,
        productId: 4,
        image: 'https://fruitboxco.com/cdn/shop/products/asset_2_800x.jpg?v=1571839043'
      },
      {
        name: 'Orange',
        price: 2,
        quantity: 0,
        productId: 5,
        image: 'https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475.png'
      },
      {
        name: 'Pineapple',
        price: 6,
        quantity: 0,
        productId: 6,
        image: 'https://www.ogbete.com.ng/wp-content/uploads/2020/06/fresh-pineapple-281kg-29-500x500.png'
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
















// displaying products 
const currencySymbol = "$";
function DrawProducts(){
    
    let listproducts = document.querySelector("#products")
    let productItems = ''
    products.forEach((element) => {
        productItems += `
            <div class="w-[200px] rounded-sm my-4 p-7 bg-gray-200 " data-productId='${element.productId}'>
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
// document.querySelector("#carts").addEventListener("click", (e)=>{
//     let productId = e.target.parentNode.getAttribute("data-productId")
//  IncreaseQuantity(productId)
// })

//increaser quantity btnplus







// add to cart
function DrawCarts(){
    let liscarts = document.querySelector("#carts")
    let cartsItems = ''
    let totalPrice = 0
    cart.forEach((element) => {
        totalPrice += element.price*element.quantity
        let totalPrice_cart = element.price*element.quantity
        cartsItems += `
            <div data-productId='${element.productId}' class="w-[200px] my-4 p-7 bg-gray-100 rounded-md ">
                <h3 class = "my-2" >${element.name}</h3>
                <p class = "my-2">price: ${currencySymbol}${element.price}</p>
                <p class = "my-2">Quantity: ${element.quantity}</p>
                <p class = "my-2">Total: $${totalPrice_cart}</p>

                
    
                     <button class=" increase px-2 bg-white rounded"   >+</button>
                    <button  class="decrease px-2 bg-white rounded">-</button> <button  class="Remove px-2 bg-white rounded">Remove</button>
                
            </div>
        `;
    });

    liscarts.innerHTML = cartsItems

    checkout(totalPrice)

 
}

function IncreaseQuantity(productId) {
    let product = cart.find(product => product.productId == productId)
    if(product){

        product.quantity++
    }
    DrawCarts()

}

function removeProductFromCart(productId){

    // let product = cart.find(product => product.productId == productId)
    // if(product){

    //     cart.shift(product)
    // }
    // DrawCarts()

}

function decreaseQuantity(productId){
    console.log(productId)
    let product = cart.find(product => product.productId == productId)
    if(product){

        product.quantity -= 1
        if(product.quantity == 0){
         
            cart.shift(product)
        }
    }
    DrawCarts()
}







    document.querySelector("#carts").addEventListener("click", (e)=>{
        let productId = e.target.parentNode.getAttribute('data-productId');
         productId *= 1;
        console.log(productId)
        function runCartFunction(fn) {
         
            for (let i = cart.length - 1; i > -1; i--) {
                if (cart[i].productId === productId) {
                    let productId = cart[i].productId;
                    fn(productId);
                }
            }
            // force cart and checkout redraw after cart function completes
            DrawCarts();
            
        }
    
        // check the target's class and run function based on class
        if (e.target.classList.contains('Remove')) {
            // run removeProductFromCart() from script.js
            runCartFunction(removeProductFromCart);
        } else if (e.target.classList.contains('increase')) {
            // run increaseQuantity() from script.js
            runCartFunction(IncreaseQuantity);
        } else if (e.target.classList.contains('decrease')) {
            // run decreaseQuantity() from script.js
            runCartFunction(decreaseQuantity);
        }

    })


    
function checkout(totalPrice){
    let checkout =   document.querySelector(".checkout")
    checkout.style.display = "block"
    checkout.innerHTML= `

        <div class="">
        <h1 class="text-2xl">Checkout</h1>
        <h1 class = "text-md my-2"> Cart total is $${totalPrice}</h1>
        </div>

        <form class = "flex flex-col justify-start">
            <p class="font-light">Enter Cash Received:</p>
            <input type="number"  class = "input text-2xl py-2 font-light rounded-sm border border-black"/>
            <button class = "bg-white border py-2 w-[100px] border-black mt-2 calculate rounded-md" type ="submit" >Submit</button>
        </form>
    `
    let form = document.querySelector('form');
    let input = document.querySelector('input')

    form.addEventListener('submit', () => {
        if(input.value != NaN ){
            checkout.innerHTML += `
            
                <h1>Cash Received:$${parseInt(input.value)}</h1>
        
                    
            `
           
            if(parseInt(input.value) > totalPrice){
                let returned = parseInt(input.value) - totalPrice 
                checkout.innerHTML += `
                 <h1 class = "text-md font-light">Cash Returned:$${returned}</h1>
                 
                    
                `
            }

            if(parseInt(input.value) < totalPrice){
                let returned =  totalPrice - parseInt(input.value) 
                checkout.innerHTML += `
                 <h1 class = "text-md font-light">Remaining Balance:$${returned}</h1>
                 <h1 class = "text-md font-light">Please pay additional amount.</h1>
                
                    
                `
            }
        }
    })






}
