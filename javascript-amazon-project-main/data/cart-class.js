// saved data 

import { addTocart } from "./cart";

class Cart{                           //create a class
  cartItems ; 
 #localStorageKey;   // private property


constructor(localStorageKey){                     // constructor
  this.#localStorageKey =  localStorageKey

  
  this.#loadfromStorage();

   
}
  
  #loadfromStorage () {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
  
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
  }

  saveTostorage(){
    localStorage.setItem(this.#localStorageKey , JSON.stringify(this.cartItems));
   }


 
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
  }



  removeFromCart(productId){ // removes product id from cart
    const newCart = [];
    
    this.cartItems.forEach( (cartItem) =>{
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    })
    
   this.cartItems  = newCart; 
    
    this.saveTostorage();
  
  }


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

}                         

const cart = new Cart('cart-oop'); // instance of class
const businessCart = new Cart('cart-business'); // instance of class



console.log(cart)
console.log(businessCart);
console.log(businessCart instanceof Cart)

