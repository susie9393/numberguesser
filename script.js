let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// returns number between 0 - 9 
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// determines which guess is closest to the target
/*
const compareGuesses = (user, comp, target) => {
    let userDist = Math.abs(target - user);
    let compDist = Math.abs(target - comp);
    return userDist <= compDist ? true : false;
};
*/
const compareGuesses = (user, comp, target) => {
    if (user < 0 || user > 9){
        alert();
    };
    let userDist = getAbsoluteDistance(target, user);
    let compDist = getAbsoluteDistance(target, comp);
    return userDist <= compDist ? true : false;
};

// correctly increase winner's score after ech round
const updateScore = winner => {
    switch (winner){
        case('human'):
            humanScore += 1;
            break;
        case('computer'):
            computerScore += 1;
            break;
    };
};

// update the round number after round
const advanceRound = () => {
    currentRoundNumber += 1;
};

// calc abs
const getAbsoluteDistance = (n1, n2) => Math.abs(n1 - n2);

// alert if not 0 - 9 
const alert = ()=> window.alert('Choose number between 0 and 9.');