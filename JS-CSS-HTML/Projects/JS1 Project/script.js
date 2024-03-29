let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let num = Math.floor(Math.random() * 10)
    return num;

}

const compareGuesses = (human, computer, target) => {
    human = generateTarget() //7
    computer = generateTarget() //3
    target = generateTarget() //8

    let humanDiff = Math.abs(human - target)
    let computerDiff = Math.abs(computer - target)
    if(humanDiff < computerDiff){
        return true;
    } else return false;
    
}

const updateScore = (winner) => {
    if (winner === 'human'){
        humanScore += 1;
    } else if(winner === 'computer'){
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}