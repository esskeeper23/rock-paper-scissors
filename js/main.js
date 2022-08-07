let computerItems = ["rock", "paper", "scissors"];

let computerSelection;

let playerSelection;

let computerCount = 0;

let playerCount = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerWins = document.querySelector(".player-wins");
const computerWins = document.querySelector(".computer-wins")
const computerImg = document.querySelector(".computer-selection");
const resetContainer = document.querySelector(".reset");
const resetGame = document.querySelector(".reset-btn")
const pointerEvents = document.querySelector(".player-selection");


rock.addEventListener("click", player)
paper.addEventListener("click", player)
scissors.addEventListener("click", player)

function player(e) {
    
    playerSelection =  e.target.id;
    playRound (playerSelection, computerSelection);
    
}



function computerPlay() {

    return computerItems[~~(Math.random() * computerItems.length)];
    

  }

function playRound() {
    computerPlay()
    computerSelection = computerPlay();

    if (computerSelection === "rock") {
        computerImg.innerHTML = `
        <img class="computer-img" style="width: 100%;" src="./images/rock.png" alt="">
        `
    }else if (computerSelection === "paper") {
        computerImg.innerHTML = `
        <img class="computer-img" style="width: 100%;" src="./images/paper.png" alt="">
        `
    }else {
        computerImg.innerHTML = `
        <img class="computer-img" style="width: 100%;" src="./images/scissors.png" alt="">
        `
    }

    console.log(playerSelection);
    
    console.log(computerSelection);
    if (computerSelection === playerSelection){
        console.log("tie");
    }else if (
        computerSelection === "rock" && playerSelection === "scissors" 
        || computerSelection === "paper" && playerSelection === "rock" 
        || computerSelection === "scissors" && playerSelection === "paper") {
            computerCount++
            console.log("computer wins: " + computerCount)
            computerWins.innerHTML = computerCount;
            reset(playerCount, computerCount)
    }else {
        playerCount++
        console.log("player wins: " + playerCount)
        playerWins.innerHTML = playerCount;
        reset(playerCount, computerCount)
    }
    
}

function reset(playerCount, ComputerCount) {
    if (playerCount === 5) {
        resetContainer.firstElementChild.textContent = "you won!, reset the game to play again!"
        resetContainer.classList.add("reset_game");
        pointerEvents.classList.add("pointer_events");
    }
    if (computerCount === 5) {
        resetContainer.firstElementChild.textContent = "Computer won!, reset the game to play again!"
        resetContainer.classList.add("reset_game");
        pointerEvents.classList.add("pointer_events");
    }
}

resetGame.addEventListener('click', function () {
    playerCount = 0;
    playerWins.innerHTML = playerCount;
    computerCount = 0;
    computerWins.innerHTML = computerCount;
    resetContainer.classList.remove("reset_game");
    pointerEvents.classList.remove("pointer_events")
})