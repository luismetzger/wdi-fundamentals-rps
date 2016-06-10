////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var move = getInput();

    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

    var move = randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var compare = function(choice1, choice2) {
        if(choice1 === choice2) {
            return "The result is a tie!";
        } else if (choice1 === "rock") {
            if(choice2 === "scissors") {
                return "rock wins";
            } else {
                return "paper wins";
            }
        } else if (choice1 === "paper") {
            if(choice2 === "rock") {
                return "paper wins";
            } else {
                return "scissors wins";
            }
        } else if (choice1 === "scissors") {
            if(choice2 === "paper") {
                return "scissors wins";
            } else {
                return "rock wins";
            }
        }
    }

    winner = compare(playerMove, computerMove);


    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {

        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);

        if (winner === "player") {
            console.log("Player has chosen" + playerMove + "and the computer chose " + computerMove + ". Player is the winner.");
            playerWins += 1;
        } else if (winner === "computer") {
            console.log("Player has chosen" + playerMove + "and the computer chose " + computerMove + ". Computer is the winner.");
            computerWins += 1;
        } else {
            playerWins && computerWins;
            console.log("tie, nobody wins.");
        }
    }

    return [playerWins, computerWins];
}

playToFive();
