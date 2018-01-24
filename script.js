let computerSelection;
// let playerScore, computerScore, tie;
let playerScore = 0;
let computerScore = 0;
let tie = 0;
let playerMove = document.getElementById("playerMove");
let computerMove = document.getElementById("computerMove");
let player = document.getElementById("playerScore");
let computer = document.getElementById("computerScore");
let numberOfTies = document.getElementById("tie");
let winningMessage = document.getElementById("winningMessage");

let computerPlay = () => {
    let num = Math.random() * 3;
    let move;
    switch (true) {
        case num < 1:
            move = "rock";
            break;
        case num >= 1 && num < 2:
            move = "paper";
            break;
        default:
            move = "scissors";
    }
    return move;
}

let game = (move, computerSelection) => {

    if (playerScore == 5 || computerScore == 5) {
        playerScore = 0, computerScore = 0, tie = 0;
        player.textContent = playerScore;
        computer.textContent = computerScore;
        numberOfTies.textContent = tie;
        winningMessage.textContent = null;
    }

    if (move == "rock") {
        playerMove.textContent = "Rock";
        if (computerSelection == "rock") {
            computerMove.textContent = "Rock";
            numberOfTies.textContent = ++tie;
        }
        else if (computerSelection == "paper") {
            computerMove.textContent = "Paper";
            computer.textContent = ++computerScore;

        }
        else if (computerSelection == "scissors") {
            computerMove.textContent = "Scissors";
            player.textContent = ++playerScore;
        }
    }
    else if (move == "paper") {
        playerMove.textContent = "Paper";
        if (computerSelection == "rock") {
            computerMove.textContent = "Rock";
            player.textContent = ++playerScore;
        }
        else if (computerSelection == "paper") {
            computerMove.textContent = "Paper";
            numberOfTies.textContent = ++tie;
        }
        else if (computerSelection == "scissors") {
            computerMove.textContent = "Scissors";
            computer.textContent = ++computerScore;
        }
    }
    else if (move == "scissors"){
        playerMove.textContent = "Scissors";
        if (computerSelection == "rock") {
            computerMove.textContent = "Rock";
            computer.textContent = ++computerScore;
        }
        else if (computerSelection == "paper") {
            computerMove.textContent = "Paper";
            player.textContent = ++playerScore;
        }
        else if (computerSelection == "scissors") {
            computerMove.textContent = "Scissors";
            numberOfTies.textContent = ++tie;
        }
    }

    if (playerScore == 5) {
        winningMessage.textContent = "Congratulations! You won!";
    }
    else if (computerScore == 5) {
        winningMessage.textContent = "The computer won. :(";
    }

}

// let rock = document.getElementById("rock");
// rock.addEventListener("click", function() { game("rock", computerPlay()) });

// let paper = document.getElementById("paper");
// paper.addEventListener("click", function() { game("paper", computerPlay()) });

// let scissors = document.getElementById("scissors");
// scissors.addEventListener("click", function() { game("scissors", computerPlay()) });

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", function() {
        game(button.getAttribute("id"), computerPlay());
    })
});