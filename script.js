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

function playRound(playerSelection = '') {
    const computerChoice = getComputerChoice().toLowerCase();
    const playerChoice = playerSelection.toLowerCase();

    if (playerChoice !== computerChoice) {
        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                return "Paper beats rock | You win!";
            } else if (computerChoice === "scissors") {
                return "Scissors beats paper | You lose!";
            }
        } else if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                return "Rock beats scissors | You win!";
            } else if ( computerChoice === "paper") {
                return "Paper beats rock | You lose!";
            }
        } else if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                return "Scissors beats paper | You win!";
            } else if (computerChoice === "rock") {
                return "Rock beats scissors | You lose!";
            }
        }
    } else {
        return `You: ${playerChoice} | Opponent: ${computerChoice} | Draw!`;
    }
}

function playGame(weapon = '') {
    let playerChoice = weapon;

    const gameResult = playRound(playerChoice);
    return gameResult;
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const container = document.querySelector('.container');
const result = document.querySelector('#result');
const score = document.querySelector('#score');

const startGame = document.querySelector('#start-game')

let playerScore;

rockButton.disabled = true;
paperButton.disabled = true;
scissorsButton.disabled = true;
startGame.disabled = false;

container.addEventListener('click', (e) => {
    let target = e.target;
    let gameResult;

    if (target.id === 'start-game' && !startGame.disabled) {
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
        startGame.disabled = true;
        playerScore = 0;
        score.textContent = `Score: ${playerScore}`;
        result.textContent = '';
    } else {
        switch (target.id) {
            case 'rock':
                gameResult = playGame('rock');
                break;
            case 'paper':
                gameResult = playGame('paper');
                break;
            case 'scissors':
                gameResult = playGame('scissors');
                break;
        }

        result.textContent = gameResult;

        if (gameResult.includes('win')) {
            playerScore++;
            if (playerScore === 5) {
                rockButton.disabled = true;
                paperButton.disabled = true;
                scissorsButton.disabled = true;
                startGame.disabled = false;
                score.textContent = 'Congratulations!';
                result.textContent = `Score: ${playerScore}`;
                return;
            }
        } else if (gameResult.includes('lose')) {
            playerScore--;
            if (playerScore === -5) {
                rockButton.disabled = true;
                paperButton.disabled = true;
                scissorsButton.disabled = true;
                startGame.disabled = false;
                score.textContent = 'Maybe next time!';
                result.textContent = `Score: ${playerScore}`;
                return;
            }
        }

        score.textContent = `Score: ${playerScore}`;
    }
});