import '../data/car.js'


import { renderOrderSummary } from './checkout/ordersummary.js';
renderOrderSummary();

import { renderPaymentSummary } from './checkout/paymentsummary.js'
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';

// import '../data/backend-practice.js'

async function loadPage(){       // makes a function return a promise
try{    //code that could cause an error into try
  //throw 'error 1'   creation of custom errors using throw
  await loadProductsFetch();    // await lets loadproductsfetch to finish before going to the next line
  
  const value =  await new Promise((resolve, reject) => {  // load cart and wait for it to finish
    // throw 'error 2'
    loadCart(() => { 
     // reject('error 3')  creation of errors in the future using promises
      resolve(value)
    })
  }) 
} catch(error){ // catches the error in try block if its present
  console.log('unexpected error . please try again later ')
}


renderOrderSummary();    // run the rest of the code
renderPaymentSummary();

}

loadPage();

/*
Promise.all([
  loadProductsFetch(), 
    new Promise((resolve, reject) => {
      loadCart(() => {
        resolve()
      })
    }) 

]).then( (values) => {
  renderOrderSummary();
  renderPaymentSummary();
})
*/

/*
new Promise((resolve, reject) => {

loadProducts( () => { // load products

  resolve('value 1')  // wait for products to finish loading, call resolve
});

}).then( (value) => {     // next step
  console.log(value)     
  return new Promise((resolve, reject) => {
    loadCart(() => {
      resolve()
    })
  }) 

}).then( () => {
  renderOrderSummary();
  renderPaymentSummary();
})

 /*
loadProducts( () => {
  loadCart( () => {
    renderOrderSummary();
  renderPaymentSummary()
  })

})
*/