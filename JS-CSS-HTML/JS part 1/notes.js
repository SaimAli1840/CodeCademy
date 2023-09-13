// let userName = '';


// userName ? console.log(`Hello ${userName}`) : console.log('Hello')

// let userQuestion = 'How old are you'
// console.log(`How old are you ${userName}`)

// let randomNumber =  Math.floor(Math.random() * 8);
// let eightBall = ''

// if(randomNumber === 0){
//     eightBall = 'It is certain'
// } else if (randomNumber === 1){
//     eightBall = 'It is decidedly so'
// }else if (randomNumber === 2){
//     eightBall = 'Reply hazy try again'

// }else if (randomNumber === 3){
//     eightBall = 'Cannot predict now'

// }else if (randomNumber === 4){
//     eightBall = 'Do not count on it'

// }else if (randomNumber === 5){
//     eightBall = 'My sources say no'

// }else if (randomNumber === 6){
//     eightBall = 'Outlook not so good'

// }else if (randomNumber === 7){
//     eightBall = 'Signs point to yes'

// }

// console.log(eightBall)






// let raceNumber = Math.floor(Math.random() * 1000);
// let isEarly = true;
// let runnerAge = '21';

// if (runnerAge > 18 && isEarly){
//     raceNumber += 1000;
// }

// if (runnerAge > 18 && isEarly){
//     console.log(`You will race at 9:00 AM and your number is ${raceNumber}`)
// } else if (runnerAge > 18 && !isEarly){
//     console.log(`You will race at 11:00 AM, and your number is ${raceNumber}`)
// } else if(runnerAge < 18){
//     console.log(`You will run at 12:30PM, and your number is ${raceNumber}`)
// }




//FUNCTIONS

//ROCK PAPER SCISSORS GAME

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput
    } else console.log('Error, type properly')
  }

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    if (num === 0){
        return 'rock'
    } else if (num === 1){
        return 'paper'
    } else if (num === 2){
        return 'scissors'
    }
}

function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice){
        return 'The game was a tie'
    }

    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'computer won'
        } else return 'user won'
    }

    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'computer won'
        } else return 'user won'
    }

    if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'computer won'
        } else return 'user won'
    }
}


function playGame( ){
    let userChoice = getUserChoice('rock');
    console.log(userChoice)
    let computerChoice = getComputerChoice();
    console.log(computerChoice);

    determineWinner(UserChoice, computerChoice)
}

playGame()













//SCOPE EXERCISE
// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {

  if (event === 'Marathon') {
    let days = 50;
  } else if (event === 'Triathlon') {
    let days = 100;
  } else if (event === 'Pentathlon') {
    let days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = event => {
  const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(event);
logTime(days);


