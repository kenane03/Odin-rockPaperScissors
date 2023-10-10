function main() {
    let computerChoice;
    let userChoice;
    let roundWinner = '';
    
    function getComputerChoice() {
        let num = Math.floor(Math.random() * 3);
        console.log(num);
        
        switch (num) {
            case 0:
                computerChoice = "ROCK";
                break;
            case 1:
                computerChoice = "PAPER";
                break;
            case 2:
                computerChoice = "SCISSORS";
                break;
        }

        return computerChoice;
    };

    function getUserChoice() {
        userChoice = prompt("Are you playing Rock, Paper or Scissors ?");

        userChoice = userChoice.toUpperCase();  

        return userChoice;
    }

    function playRound (userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            roundWinner = "Tie"
        }
        else if (
            (userChoice === "ROCK" && computerChoice === "SCISSORS" || 
            userChoice === "PAPER" && computerChoice === "ROCK" || 
            userChoice === "SCISSORS" && computerChoice === "PAPER")
        ) {
            roundWinner = "Player";
            
        }
        else if (
            (computerChoice === "ROCK" && userChoice === "SCISSORS" ||
            computerChoice === "PAPER" && userChoice === "ROCK" ||
            computerChoice === "SCISSORS" && userChoice === "PAPER")
        ) {
            roundWinner = "Computer";
        } 

        console.log(roundWinner);
    }

    function displayWinner (roundWinner) {
        if (roundWinner === "Player") {
            console.log("Congrats! You won!");
        }
        else if (roundWinner === "Computer") {
            console.log("You lost");
        }
        else {
            console.log("It's a tie game");
        }
    }

    getComputerChoice();
    console.log(computerChoice)
    getUserChoice();
    console.log(userChoice);
    playRound(userChoice, computerChoice);
    displayWinner(roundWinner);
};

main();
main();
main();
main();
main();