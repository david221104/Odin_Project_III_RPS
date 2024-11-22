// random number function
function getComputerChoice() {
    // gets a random number
    let number = Math.floor(Math.random() * 3); 
    // decides rock, paper or scissors based on the given number
    switch(number) {
        case 0 : number = "Rock";                    
                    break;
        case 1 : number = "Paper";
                    break;
        case 2 : number = "Scissors";
                    break;
        default : break;
    }

    return number;
}


// prompts for player input 
function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?");
    return choice;
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // puts the values at uppercase to avoid case sensitiviy 
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    console.log(humanChoice, computerChoice);
    



    // game mechanism
    if(humanChoice == computerChoice) {
        console.log("Draw!");
    }
    else if(humanChoice == "ROCK" && computerChoice == "PAPER") {
        console.log("Computer wins!");
        humanScore += 0; computerScore += 1;
    }
    else if(humanChoice == "PAPER" && computerChoice == "ROCK") {
        console.log("Player wins!");
        humanScore += 1; computerScore += 0;
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        console.log("Computer wins!");
        humanScore += 0; computerScore += 1;
    }
    else if(humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        console.log("Player wins!");
        humanScore += 1; computerScore += 0;
    }
    else if(humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        console.log("Computer wins!");
        humanScore += 0; computerScore += 1;
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        console.log("Player wins!");
        humanScore += 1; computerScore += 0;
    }
    else {
        console.log("Invalid player input");
    }


}


function playGame() {

    console.log("Hello, you are playing Rock, Paper, Scissors, whihc lasts for 5 rounds.");

    for(let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:`);
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Current score is: \n`);
        console.log(`Player: ${humanScore}         Computer: ${computerScore}`);
    }   
        
    console.log("Thank you for playing. Your final results are: ");
    console.log(`Player: ${humanScore}         Computer: ${computerScore}`);
}


playGame();