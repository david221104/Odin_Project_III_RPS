const game = document.querySelector("#choice");
const startDiv = document.querySelector("#startDiv");
const start = document.createElement("button");
start.textContent = "START";
start.addEventListener("click", () => {
    playGame();
}); 
startDiv.appendChild(start);



let humanScore = 0, computerScore = 0;

//displaying the result, that is reset with textContent = ""
const resultDiv = document.querySelector("#result");
const result = document.createElement("p");
result.textContent = "";
//current player/computer score
let playerResult = document.createElement("p");
let computerResult = document.createElement("p");
playerResult.textContent = `Human score: ${humanScore}`;
computerResult.textContent = `Computer score: ${computerScore}`;
resultDiv.appendChild(playerResult);
resultDiv.appendChild(computerResult);
resultDiv.appendChild(result);

//buttons with event listeners, disabled unless start is pressed
let playerSelection;

const rock = document.createElement("button");
rock.classList.add("rock");
rock.setAttribute("style", "background: url('rock.png') no-repeat center / contain; border: none; padding; 0; height: 200px; width: 200px");
rock.disabled = true;
rock.addEventListener("click", () => {
    playRound(getComputerChoice(), playerSelection = "Rock")
});


const paper = document.createElement("button");
paper.classList.add("paper");
paper.setAttribute("style", "background: url('paper.jpeg') no-repeat center / contain; border: none; padding; 0; height: 200px; width: 200px");
paper.disabled = true;
paper.addEventListener("click", () => {
    playRound(getComputerChoice(), playerSelection = "Paper")
});

const scissors = document.createElement("button");
scissors.classList.add("scissors");
scissors.setAttribute("style", "background: url('scissors.png') no-repeat center / contain; border: none; padding; 0; height: 200px; width: 200px");
scissors.disabled = true;
scissors.addEventListener("click", () => {
    playRound(getComputerChoice(), playerSelection = "Scissors")
});

game.appendChild(rock);
game.appendChild(paper);
game.appendChild(scissors);


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


//playRound function
function playRound(computerChoice, playerChoice){
    if(playerChoice == computerChoice) {
        result.textContent = "Draw!";
    }
    else if(playerChoice == "Rock" && computerChoice == "Paper") {
        result.textContent = "Computer wins!";
        computerScore++;
    }
    else if(playerChoice == "Paper" && computerChoice == "Rock") {
        result.textContent = "Player wins!";
        humanScore++;
    }
    else if(playerChoice == "Scissors" && computerChoice == "Rock") {
        result.textContent = "Computer wins!";
        computerScore++;
    }
    else if(playerChoice == "Rock" && computerChoice == "Scissors") {
        result.textContent = "Player wins!";
        humanScore++;
    }
    else if(playerChoice == "Paper" && computerChoice == "Scissors") {
        result.textContent = "Computer wins!";
        computerScore++;
    }
    else if(playerChoice == "Scissors" && computerChoice == "Paper") {
        result.textContent = "Player wins!";
        humanScore++;
    }
    else {
        console.log("Invalid player input");
    }

    playerResult.textContent = `Human score: ${humanScore}`;
    computerResult.textContent = `Computer score: ${computerScore}`;

    //plays up until round 5
    if(humanScore >= 5) {
        result.textContent = "Round 5 reached! You won! Press START to try again.";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    if(computerScore >= 5) {
        result.textContent = "Round 5 reached! Computer won! Press START to try again.";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } 

}

//starts or resets the game, and enables the buttons
function playGame() {
    humanScore = 0;
    computerScore = 0;
    result.textContent = "";
    playerResult.textContent = `Human score: ${humanScore}`;
    computerResult.textContent = `Computer score: ${computerScore}`;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

