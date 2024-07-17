// saved data 

import { addTocart } from "./cart";

function Cart (localStorageKey) {
  const cart = {
    cartItems  :  undefined , // shortcut for cart undefined
  
     loadfromStorage () {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
    
    if(!this.cartItems) {
      this.cartItems = [{
        productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6' ,
        quantity : 2,
        deliveryOptionId : '1',
      }, {
        productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity : 1 ,
           deliveryOptionId : '2',
      }
     ];
    }
    },
  
  
   saveTostorage(){
      localStorage.setItem(localStorageKey , JSON.stringify(this.cartItems));
     },
  
  
  
  
  
  
     
    addTocart(productId) {
      let matchingItem;
    
      this.cartItems.forEach( (cartItem) =>{
        if(productId === cartItem.productId){
      matchingItem = cartItem
        }
      })
      
      if(matchingItem) {
        matchingItem.quantity += 1
      } else{
        this.cartItems.push({
          productId : productId,
          quantity : 1,
          deliveryOptionId : '1',
        })
      }
     this.saveTostorage();
    },
  
  
  
  
     removeFromCart(productId){ // removes product id from cart
      const newCart = [];
      
      this.cartItems.forEach( (cartItem) =>{
        if(cartItem.productId !== productId){
          newCart.push(cartItem);
        }
      })
      
     this.cartItems  = newCart; 
      
      this.saveTostorage();
    
    },
    
  
  
  
  
    updateDeliveryOption(productId, deliveryOptionId){
      let matchingItem;
    
      this.cartItems.forEach( (cartItem) =>{
        if(productId === cartItem.productId){
      matchingItem = cartItem
        }
      })
      
      matchingItem.deliveryOptionId = deliveryOptionId;
    
      this.saveTostorage();
    }
  };

  return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');




cart.loadfromStorage();

/*
cart.addTocart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e')
 console.log(cart);
 */





businessCart.loadfromStorage();
 

console.log(cart)
console.log(businessCart);


