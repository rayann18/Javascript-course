import '../data/car.js'


import { renderOrderSummary } from './checkout/ordersummary.js';
renderOrderSummary();

import { renderPaymentSummary } from './checkout/paymentsummary.js'
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';

// import '../data/backend-practice.js'

async function loadPage(){       // makes a function return a promise




await loadProductsFetch();    // await lets loadproductsfetch to finish before going to the next line
  
const value =  await new Promise((resolve, reject) => {  // load cart and wait for it to finish
  loadCart(() => { 
    resolve(value)
  })
}) 

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