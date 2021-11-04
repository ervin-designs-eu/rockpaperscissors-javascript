const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    }
    else { return console.log('Error!');}
  };
  
  
  
  
  function getComputerChoice() {
  
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
       return 'rock';
      case 1:
       return 'paper';
      case 2:
       return 'scissors';
    }
  }
  
  
  const determineWinner = (userChoice, computerChoice) => {
  
  if (userChoice === computerChoice) {
    return 'TIE';
  }
  else if (userChoice === 'rock' && computerChoice === 'paper')
  {
    return `The computer won, he picked ${computerChoice}`;
  }
  else if (userChoice === 'paper' && computerChoice === 'rock') {
    return `Congratulation you won! Computer choose ${computerChoice}`;
  }
  else if (userChoice === 'scissors' && computerChoice === 'rock') {
    return `The computer won, he picked ${computerchoice}`;
  }
  else if (userChoice === 'rock'  && commputerChoice === 'scissors') {
    return `Congratulation you won! Computer choose ${computerChoice}`;
  }
  else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return `Congratulation you won! Computer choose ${computerChoice}`;
  }
  else if (userChoice === 'paper' && computerChoice === 'scissors') {
    return `The computer won, he picked ${computerChoice}`;
  }

  }
  
   const playGame =  () => {
  
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
  
    
    console.log(`You threw ${userChoice}`);
    console.log(`Computer threw: ${computerChoice}`);
  
  
    console.log(determineWinner(userChoice,computerChoice));
  }
  
  playGame();
  