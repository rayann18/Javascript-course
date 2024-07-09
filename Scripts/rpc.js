let score = 
  
(JSON.parse(localStorage.getItem('score')));
  

if(score=== null){
score = {
  wins : 0,
  losses : 0, 
  ties : 0
}
}

  const choices = ['rock', 'paper' , 'scissors'];

  function getcomputerChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
  }

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


function playGame(userChoice) {
  const computerChoice = getcomputerChoice();
  const result= determineWinner(userChoice, computerChoice);
  alert(`you chose ${userChoice}. Computer chose ${computerChoice}.${result}
wins : ${score.wins} , losses : ${score.losses}, ties: ${score.ties}
  
  `);
}
