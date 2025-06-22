const game = document.querySelector("#lol");
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

let humanScore = 0, computerScore = 0;

function playRound(computerChoice, playerChoice){
    const result = document.createElement("div");
    result.setAttribute("style", "display: flex; flex-direction: column;") 
    result.textContent = "";
    if(playerChoice == computerChoice) {
        result.textContent = "Draw!";
        game.appendChild(result);
    }
    else if(playerChoice == "Rock" && computerChoice == "Paper") {
        result.textContent = "Computer wins!";
        game.appendChild(result);
    }
    else if(playerChoice == "Paper" && computerChoice == "Rock") {
        result.textContent = "Player wins!";
        game.appendChild(result);
    }
    else if(playerChoice == "Scissors" && computerChoice == "Rock") {
        result.textContent = "Computer wins!";
        game.appendChild(result);
    }
    else if(playerChoice == "Rock" && computerChoice == "Scissors") {
        result.textContent = "Player wins!";
        game.appendChild(result);
    }
    else if(playerChoice == "Paper" && computerChoice == "Scissors") {
        result.textContent = "Computer wins!";
        game.appendChild(result);
    }
    else if(playerChoice == "Scissors" && computerChoice == "Paper") {
        result.textContent = "Player wins!";
        game.appendChild(result);
    }
    else {
        console.log("Invalid player input");
    }
}

let playerSelection;

const rock = document.createElement("button");
rock.classList.add("rock");
rock.setAttribute("style", "background: url('rock.png') no-repeat center / contain; border: none; padding; 0; height: 200px; width: 200px");
rock.addEventListener("click", () => {
    playRound(getComputerChoice(), playerSelection = "Rock")
});


const paper = document.createElement("button");
paper.classList.add("paper");
paper.setAttribute("style", "background: url('paper.jpeg') no-repeat center / contain; border: none; padding; 0; height: 200px; width: 200px");
paper.addEventListener("click", () => {
    playRound(getComputerChoice(), playerSelection = "Paper")
});

const scissors = document.createElement("button");
scissors.classList.add("scissors");
scissors.setAttribute("style", "background: url('scissors.png') no-repeat center / contain; border: none; padding; 0; height: 200px; width: 200px");
scissors.addEventListener("click", () => {
    playRound(getComputerChoice(), playerSelection = "Scissors")
});

game.appendChild(rock);
game.appendChild(paper);
game.appendChild(scissors);
