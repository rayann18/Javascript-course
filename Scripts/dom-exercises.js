  
function updateText(){
  const inputText = event.target.value
  document.getElementById('typedText').innerText = inputText;
}





  function checkEnter(event){
    if(event.key === 'Enter'){
      displayText();
    }
  }
function displayText(){
  const inputText = document.getElementById('nameInput').value
  document.getElementById('displayText').innerText = 'Your name is :' + inputText
}




function displayChoice(choice){
document.getElementById('choiceDisplay').innerText = 'You chose :' + choice
} 


function scheduleFor(){
  console.log (buttonElement = document.querySelector('.js-schedule-btn'))
  if(buttonElement.innerHTML === 'Schedule for later'){
    buttonElement.innerHTML = 'Scheduled'
    buttonElement.classList.contains('schedule-later-btn')
  }else{
    button.innerHTML = 'Schedule for later'
  }
}


function requestFunc(){
  let buttonElement = document.querySelector('.js-req-btn')
  if(buttonElement.innerHTML ==='Request Now'){
    buttonElement.innerHTML= 'Request successful'
    buttonElement.classList.add('request-btn')
  }else{
    buttonElement.innerHTML = 'Request now'
  }
}


function updateText(){
  document.getElementById('typed text').innerText = ''
}

function addTocart(){
 const buttonElement = document.querySelector('.js-add-btn')
  if( buttonElement.innerHTML ==='Add to cart'){
    buttonElement.innerHTML = 'Cart is full'
    buttonElement.classList.add('Am-full')
  } else{
    buttonElement.innerHTML = 'Add to cart'
  }
}



  const button= document.getElementById('toggleButton');
  button.addEventListener('click', () => {
  button.classList.toggle('is-toggled')
  });

