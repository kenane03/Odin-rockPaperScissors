function main() {
    
    function getComputerChoice() {
        let computerChoice;
        let num = Math.floor(Math.random() * 3);
        console.log(num);
        
        switch (num) {
            case 0:
                computerChoice = "Rock";
                break;
            case 1:
                computerChoice = "Paper";
                break;
            case 2:
                computerChoice = "Scissors";
                break;
        }

        console.log(computerChoice);
    };

    getComputerChoice();
};

main();