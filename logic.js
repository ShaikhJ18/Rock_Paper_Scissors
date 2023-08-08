
function getComputerChoice(){
    //get random number between 1 and 3
    choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    //based on the value 1-3 the function returns rock paper or scissors
    if (choice == 1){
        return "Rock"
    }
    else if (choice == 2){
        return "Paper"
    }
    else if (choice == 3){
        return "scissors"
    }
    else{
        return "Paper"
    }
}

function playRound(playerSelection,computerSelection){
    player = playerSelection.toLowerCase()
    computer = computerSelection.toLowerCase()
    if (player == computerSelection){
        return "TIE!"
    }
    else if (player == "rock" && computer == "scissors"){
        return "You Win! rock beats scissors!"
    }
    else if (player == "rock" && computer == "paper"){
        return "You Lose! paper beats rock"
    }
    else if (player == "paper" && computer == "scissors"){
        return "You Lose! Scissors beat paper!"
    }
    else if (player == "paper" && computer == "rock"){
        return "You Win! paper beats rock"
    }
    else if (player == "scissors" && computer == "paper"){
        return "You Win! scissors beats paper!"
    }
    else if (player == "scissors" && computer == "rock"){
        return "You Lose! rock beats scissors"
    }
}

function game(){
    console.log("Welcome to Rock Paper Scissors!")
    for (let i = 0; i < 5; i ++){
        console.log(`Round ${i+1}`)
        playerChoice = prompt("Choose Rock, Paper, or Scissors")
        winMessage = playRound(playerChoice,getComputerChoice())
        console.log(winMessage)
    }
}

game()
