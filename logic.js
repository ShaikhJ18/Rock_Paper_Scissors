const announcement = document.querySelector('h2')
const btnrock = document.querySelector("#rock")
const btnscissors = document.querySelector("#scissors")
const btnpaper = document.querySelector("#paper")
const computerimage = document.querySelector("#computer-image")
const playerimage = document.querySelector("#player-image")

function getComputerChoice(){
    //get random number between 1 and 3
    choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    //based on the value 1-3 the function returns rock paper or scissors
    if (choice == 1){
        computerimage.setAttribute('src','imagesForRPS/fistemojiproper.png')
        return 'rock'
    }
    else if (choice == 2){
        computerimage.setAttribute('src','imagesForRPS/handemoji.png')
        return 'paper'
    }
    else if (choice == 3){
        computerimage.setAttribute('src','imagesForRPS/scissorsemojigood.png')
        return "scissors"
    }
    else{
        computerimage.setAttribute('src','imagesForRPS/scissorsemojigood.png')
        return "scissors"
    }
}
function playRound(playerSelection,computerSelection){
    player = playerSelection.toLowerCase()
    computer = computerSelection.toLowerCase()
    if (player == computerSelection){
        announcement.textContent = 'TIE';
    }
    else if (player == "rock" && computer == "scissors"){
        announcement.textContent = "You Win!"
    }
    else if (player == "rock" && computer == "paper"){
        announcement.textContent = "You Lose!"

    }
    else if (player == "paper" && computer == "scissors"){
        announcement.textContent = "You Lose!"
    }
    else if (player == "paper" && computer == "rock"){
        announcement.textContent = "You Win!"
    }
    else if (player == "scissors" && computer == "paper"){
        announcement.textContent = "You Win!"
    }
    else if (player == "scissors" && computer == "rock"){
        announcement.textContent = "You Lose!"
    }
}

btnpaper.addEventListener("click", function(){
    playerimage.setAttribute('src','imagesForRPS/handemoji.png')
    computer = getComputerChoice()
    playRound('paper', computer);
})
btnrock.addEventListener('click', function(){
    playerimage.setAttribute('src','imagesForRPS/fistemojiproper.png')
    computer = getComputerChoice()
    playRound('rock',computer)
})
btnscissors.addEventListener('click',function(){
    playerimage.setAttribute('src','imagesForRPS/scissorsemojigood.png')
    computer = getComputerChoice()
    playRound('scissors',computer)
})