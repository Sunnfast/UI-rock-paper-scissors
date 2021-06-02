// buttons
let playerScore = 0;
let computerScore = 0;

scoreboardUpdate()

const rockB = document.querySelector('#rock-btn');
rockB.addEventListener('click', () => {
        playerSelection = "rock";
        computerPlay()
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        scoreboardUpdate();
});

const paperB = document.querySelector('#paper-btn');
paperB.addEventListener('click', () => {
        playerSelection = "paper";
        computerPlay()
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
});

const scissorsB = document.querySelector('#scissors-btn');
scissorsB.addEventListener('click', () => {
        playerSelection = "scissors";
        computerPlay()
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
});

// experimental script



function scoreboardUpdate() {
    document.getElementById("scoreboardComputer").innerHTML = computerScore;
    document.getElementById("scoreboardPlayer").innerHTML = playerScore;
}


// JS script for game begins here

        


    game()

    function game() {

        // full gameplay 'loop': plays five times
        //let computerSelection = computerPlay();
        //let playerSelection = playerPlay();
        //playRound(playerSelection, computerSelection);
        //keepScore(playerScore, computerScore);

        //computerSelection = computerPlay();
        //playerSelection = playerPlay();
        //playRound(playerSelection, computerSelection);
        //keepScore(playerScore, computerScore);

        //computerSelection = computerPlay();
        //playerSelection = playerPlay();
        //playRound(playerSelection, computerSelection);
        //keepScore(playerScore, computerScore);

        //computerSelection = computerPlay();
        //playerSelection = playerPlay();
        //playRound(playerSelection, computerSelection);
        //keepScore(playerScore, computerScore);

        //computerSelection = computerPlay();
        //playerSelection = playerPlay();
        //playRound(playerSelection, computerSelection);
        //keepScore(playerScore, computerScore);

        // gives the final score of the game
        gameOutcome(playerScore, computerScore);
        
        
    }

    // calculates who wins the best of five
    function gameOutcome(playerScore, computerScore) {
            if (playerScore > computerScore) {
                console.log('You won the best out of five games with a total of' + playerScore + '!');

            } else if (playerScore < computerScore) {
                console.log('Too bad! You lost the best of five games, better luck next time!');

            } else if (playerScore == computerScore) {
                console.log('A tie! This is pretty rare.');
            }
    }

    // keeps score during the game
    function keepScore(playerScore, computerScore) {
        console.log('You have currently won '+ playerScore + ' games, and the computer has won ' + computerScore + ' games.')
    }

    
    //assigns the computer a pick for the game
    function computerPlay() {
        const compChoice = ["rock", "paper", "scissors"]

        const randNumber = Math.floor(Math.random() * 3)

        let compPick = compChoice[randNumber];
        console.log('The computer has decided what it is going to use.')
        
        return compPick;
        
    }       
    

    // play one round
    function playRound(playerSelection, computerSelection) {  
        // compPick is rock
        console.log('Rock, paper, scissors.... shoot!')

        if (computerSelection === "rock") {

            // vs player picking rock
            if (playerSelection === "rock") {
                console.log(`Draw! Unsurprisingly, ${playerSelection} against ${computerSelection} does absolutely nothing!`);
            // vs player picking paper
            } else if (playerSelection === "paper") {
                console.log(`You win because ${playerSelection} beats ${computerSelection}!`);
                playerScore++
            // vs player picking scissors
            } else if (playerSelection === "scissors") {
                console.log(`You lose because ${computerSelection} beats ${playerSelection}!`);
                computerScore++
            }
        }
        
        //compPick is paper
        else if (computerSelection === "paper") {
            // vs player picking paper
            if (playerSelection === "paper") {
                console.log(`Draw! Unsurprisingly, ${playerSelection} against ${computerSelection} does absolutely nothing!`);
            // vs player picking scissors
            } else if (playerSelection === "scissors") {
                console.log(`You win because ${playerSelection} beats ${computerSelection}!`);
                playerScore++
            // vs player picking rock
            } else if (playerSelection === "rock") {
                console.log(`You lose because ${computerSelection} beats ${playerSelection}!`);
                computerScore++
            }
            
        }
            
        //compPick is scissors
        else if (computerSelection === "scissors") {
            // vs player picking scissors
            if (playerSelection === "scissors") {
                console.log(`Draw! Unsurprisingly, ${playerSelection} against ${computerSelection} does absolutely nothing!`);
            // vs player picking rock
            } else if (playerSelection === "rock") {
                console.log(`You win because ${playerSelection} beats ${computerSelection}!`);
                playerScore++
            // vs player picking paper
            } else if (playerSelection === "paper") {
                console.log(`You lose because ${computerSelection} beats ${playerSelection}!`);
                computerScore++
            }
                
        }
    }
                

