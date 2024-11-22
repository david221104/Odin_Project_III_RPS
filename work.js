// random number function
function getComputerChoice() {
    //gets a random number
    let number = Math.floor(Math.random() * 3); 
    console.log(number);
    //decides rock, paper or scissors based on the given number
    switch(number) {
        case 0 : console.log("Rock!")                    
                    break;
        case 1 : console.log("Paper!");
                    break;
        case 2 : console.log("Scissors!");
                    break;
        default : break;
    }
}

getComputerChoice();
