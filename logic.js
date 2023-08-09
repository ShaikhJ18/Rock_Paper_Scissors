
function getComputerChoice(){
    //get random number between 1 and 3
    choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    //based on the value 1-3 the function returns rock paper or scissors
    if (choice == 1){
        return 'rock'
    }
    else if (choice == 2){
        return 'paper'
    }
    else if (choice == 3){
        return 'scissors'
    }
    else{
        return 'scissors'
    }
}
const announcement = document.querySelector('h2')
function playRound(playerSelection,computerSelection){
    player = playerSelection.toLowerCase()
    computer = computerSelection.toLowerCase()
    if (player == computerSelection){
        announcement.textContent = "TIE"
        return "TIE"
    }
    else if (player == "rock" && computer == "scissors"){
        return "You Win!"
    }
    else if (player == "rock" && computer == "paper"){
        announcement.textContent = "You Lose!"
        return "You Lose!"

    }
    else if (player == "paper" && computer == "scissors"){
        announcement.textContent = "You Lose!"
        return "You Lose!"
    }
    else if (player == "paper" && computer == "rock"){
        announcement.textContent = "You Win!"
        return "You Win!"
    }
    else if (player == "scissors" && computer == "paper"){
        announcement.textContent = "You Win"
        return "You Win!"
    }
    else if (player == "scissors" && computer == "rock"){
        announcement.textContent = "You Lose!"
        return "you Lose !"
    }
}
playRound('rock',getComputerChoice())
