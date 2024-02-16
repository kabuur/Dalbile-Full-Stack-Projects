export const products = [

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
    
export const cart = [];

export function AddTocart (productId) {
    let product = products.find(product => product.productId === productId);
    if(cart.includes(product)){
        let productIndex = cart.indexOf(product);
        cart[productIndex].quantity ++;
        return
    }
    cart.push(product);


}



