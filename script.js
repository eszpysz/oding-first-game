function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else if (computerChoice === 3) {
        return "Scissors";
    }
}

// test

function playRound(playerSelection = '', computerSelection = '') {
    const computerChoice = getComputerChoice().toLowerCase();
    const playerChoice = playerSelection.toLowerCase();

    if (playerChoice !== computerChoice) {
        if (playerChoice === "paper" || playerChoice === "p") {
            if (computerChoice === "rock") {
                return "Paper beats rock\nYou win!";
            } else if (computerChoice === "scissors") {
                return "Scissors beats paper\nYou lose!";
            } else {
                return "DRAW";
            }
        } else if (playerChoice === "rock" || playerChoice === "r") {
            if (computerChoice === "scissors") {
                return "Rock beats scissors\nYou win!";
            } else if ( computerChoice === "paper") {
                return "Paper beats rock\nYou lose!";
            } else {
                return "DRAW";
            }
        } else if (playerChoice === "scissors" || playerChoice === "s") {
            if (computerChoice === "paper") {
                return "Scissors beats paper\nYou win!";
            } else if (computerChoice === "rock") {
                return "Rock beats scissors\nYou lose!";
            } else {
                return "DRAW";
            }
        }
    }
}

function playGame() {
    let score = 0;

    let playerChoice = prompt("Enter type of weapon\nRock / Paper / Scissors");
    const computerChoice = getComputerChoice().toLowerCase();

    if (playerChoice !== null) {
        playerChoice = playerChoice.toLowerCase();
    }

    if (playerChoice === '') {
        alert("ERROR!\nEnter type of weapon\nRock / Paper / Scissors");
        index--;
        } else if (playerChoice === null) {
            console.log("canceled");
            index = 5;
        } else if (playerChoice === "rock" || playerChoice === "r" ||
            playerChoice === "paper" || playerChoice === "p" ||
            playerChoice === "scissors" || playerChoice === "s")
            {
                const gameResult = playRound(playerChoice, computerChoice);
                alert(gameResult);

                if (gameResult.slice(-4) === "win!") {
                    score++;
                } else if (gameResult.slice(-5) === "lose!") {
                    score--;
                } 
            } else {
                alert("ERROR!\nEnter type of weapon\nRock / Paper / Scissors");
                index--;    
            }

    alert("Score: " + score);
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors')

const container = document.querySelector('container');

container.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id) {
        case 'rock':
            break;
        case 'paper':
            break;
        case 'scissors':
            break;
    }
});

playGame();