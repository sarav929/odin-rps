

// get computer choice randomly
function getComputerChoice() {
    let strArray = ["Rock", "Paper", "Scissors"];

    let random = Math.random() * 3;
    random = Math.floor(random);

    let computerChoice = strArray[random];
    return computerChoice;
}

// initialise scores
let playerScore = 0;
let computerScore = 0;

let playerSelection;

// play a round and update scores 
function playRound(playerSelection, computerSelection) {

    if (playerScore < 5 && computerScore < 5) {
        document.getElementById("choices").innerText = `${playerSelection} vs ${computerSelection}`;

        // tie
        if (playerSelection === computerSelection) {
            document.getElementById("result").innerText = "It's a tie!";
        }

        // rock
        if (playerSelection === "Rock"  && computerSelection === "Paper") {
            document.getElementById("result").innerText = (`You lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
            
        } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
            document.getElementById("result").innerText = (`You win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }

        // paper
        if (playerSelection === "Paper"  && computerSelection === "Scissors") {
            document.getElementById("result").innerText = (`You lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
            
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            document.getElementById("result").innerText = (`You win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;   
        }

        // scissors
        if (playerSelection === "Scissors"  && computerSelection === "Rock") {
            document.getElementById("result").innerText = (`You lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
            
        } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
            document.getElementById("result").innerText = (`You win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        };
    };

    if (playerScore === 5) {
        document.getElementById("finalResult").innerText = "YOU WON!"
    } else if (computerScore === 5) {
        document.getElementById("finalResult").innerText = "GAME OVER"
    };
    
        document.getElementById("playerScore").innerText = `Player: ${playerScore}`;
        document.getElementById("computerScore").innerText = `Computer: ${computerScore}`;
};

// add event listener to buttons and play round when clicked 
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        computerSelection = getComputerChoice();
        playerSelection = button.id;
        playRound(playerSelection, computerSelection);
    });
});


