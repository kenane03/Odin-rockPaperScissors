function main() {
    const playerText = document.querySelector("#player-choice");
    const computerText = document.querySelector("#computer-choice");
    const resultText = document.querySelector("#result");
    const playerScoreText = document.querySelector(".player-score");
    const computerScoreText = document.querySelector(".computer-score");
    const choiceBtns = document.querySelectorAll(".choice-btn");
    let playerChoice;
    let computerChoice;
    let playerScore = 0;
    let computerScore = 0;


    choiceBtns.forEach(button => button.addEventListener("click", () => {
        playerChoice = button.textContent;
        playerText.textContent = `${playerChoice}`;

        getComputerChoice();
    }));

    function getComputerChoice() {
        let randNum = Math.floor(Math.random() * 3);

        switch (randNum) {
            case 0:
                computerChoice = "👊";
                break;
            case 1:
                computerChoice = "✋";
                break;
            case 2:
                computerChoice = "✌️";
                break;
        }

        computerText.textContent = `${computerChoice}`;
        checkWinner();
    };

    function checkWinner() {
        if (playerChoice === computerChoice) {
            resultText.textContent = "It's a draw"; 
        }
        else if (playerChoice === "👊") {
            if (computerChoice === "✋") {
                resultText.textContent = "You lose!";
                computerScore++;
            }
            else {
                resultText.textContent = "You won!";
                playerScore++;
            }
        }
        else if (playerChoice === "✋") {
            if (computerChoice === "✌️") {
                resultText.textContent = "You lose!";
                computerScore++;
            }
            else {
                resultText.textContent = "You won!";
                playerScore++;
            }
        }
        else if (playerChoice === "✌️") {
            if (computerChoice === "👊") {
                resultText.textContent = "You lose!";
                computerScore++;
            }
            else {
                resultText.textContent = "You won!";
                playerScore++;
            }
        }
        updateScore();
    };

    function updateScore() {
        playerScoreText.textContent = `${playerScore}`;
        computerScoreText.textContent = `${computerScore}`;
    };
};

main();