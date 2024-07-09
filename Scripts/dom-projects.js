String(25)
console.log('25' - 5)






function handleCostKeyDown(event){
  if(event.key === 'Enter'){
  calculateTotal();
}
}

function calculateTotal(){
  const inputElement = document.querySelector('.js-cost-input');
 let cost = Number(inputElement.value) 
if(cost < 40){
  cost = cost + 10;
}

document.querySelector('.js-total-cost').innerHTML= `$${cost}`
}


function Subscribe(){
  const buttonElement = document.querySelector('.js-Subscribe-button')

if(buttonElement.innerHTML==='Subscribe'){
buttonElement.innerHTML = 'Subscribed'
buttonElement.classList.add('is-subscribed')
//buttonElement.classList.remove('is-subscribed')
} else {
 buttonElement.innerHTML = 'Subscribe'
}
 
}


