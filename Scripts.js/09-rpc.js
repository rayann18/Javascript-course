
let score = 
  
(JSON.parse(localStorage.getItem('score')));
  

if(score=== null){
score = {
  wins : 0,
  losses : 0, 
  ties : 0
}

document.querySelector('.js-score').innerHTML=`wins : ${score.wins} , losses : ${score.losses}, ties: ${score.ties}
  `
}

  const choices = ['rock', 'paper' , 'scissors'];

  function getcomputerChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
  }


  function autoplay() {
setInterval(()  => {
  const userChoice = computerChoice
  playGame(userChoice)
}, 3000)
  }

document.querySelector('.js-rock-button').addEventListener('click' , () => {
  playGame('rock')
})
document.querySelector('.js-paper-button').addEventListener('click' , () => {
  playGame('paper')
})
document.querySelector('.js-scissors-button').addEventListener('click' , () => {
  playGame('scissors')
})


  function determineWinner(userChoice , computerChoice){
    if(userChoice === computerChoice){
      return 'its a tie';
    } else if((userChoice === 'rock' && computerChoice === 'scissors') || 
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice ==='rock')) {
        return 'you win'
      } else{
        return 'you lose'
      }
    
    }

 let result = ''
    if (result === 'you win'){
score.wins = score.wins + 1
    } else if(result === 'you lose'){
score.losses = score.losses + 1
    } else if (result === 'its a tie'){
score.ties = score.ties + 1
    }

 localStorage.setItem('score', JSON.stringify(score))


document.body.addEventListener('keydown' , (event) => {
  if(event.key==='r'){
    playGame('rock')
  } else if(event.key==='p'){
    playGame('paper')
  } else if(event.key==='s'){
    playGame('scissors')
  }

})


function playGame(userChoice) {
  const computerChoice = getcomputerChoice();
  const result= determineWinner(userChoice, computerChoice);
  alert(`you chose ${userChoice}. Computer chose ${computerChoice}.${result}
wins : ${score.wins} , losses : ${score.losses}, ties: ${score.ties}
  
  `)
}

