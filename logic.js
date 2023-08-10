const announcement = document.querySelector('h2')
const btnrock = document.querySelector("#rock")
const btnscissors = document.querySelector("#scissors")
const btnpaper = document.querySelector("#paper")
const computerimage = document.querySelector("#computer-image")
const playerimage = document.querySelector("#player-image")
const playerScore = document.querySelector("#player-score")
const computerScore = document.querySelector("#computer-score")
const roundNumber = document.querySelector("#roundNum")

let playerScoreHtml = 0;
let computerScoreHtml = 0;
let scoreString = "Score: "
let roundString = "Round: "
let ROUNDNUM = 0
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
        ROUNDNUM++
        if (ROUNDNUM == 6 && playerScoreHtml>computerScoreHtml){
            alert("YOU WIN! REFRESH TO PLAY AGAIN")
        }
         if (ROUNDNUM == 6 && computerScoreHtml>playerScoreHtml){
            alert("YOU LOSE! REFRESH TO PLAY AGAIN")
        }
        if (ROUNDNUM == 6 && computerScoreHtml == playerScoreHtml){
            alert("TIE! REFRESH TO PLAY AGAIN")
        } 
        roundNumber.textContent = roundString + ROUNDNUM
    }
    else if (player == "rock" && computer == "scissors"){
        playerScoreHtml++;
        playerScore.textContent = "Player " +scoreString+playerScoreHtml
        ROUNDNUM++
        if (ROUNDNUM == 6 && playerScoreHtml>computerScoreHtml){
            alert("YOU WIN! REFRESH TO PLAY AGAIN")
        }
         if (ROUNDNUM == 6 && computerScoreHtml>playerScoreHtml){
            alert("YOU LOSE! REFRESH TO PLAY AGAIN")
        }
        if (ROUNDNUM == 6 && computerScoreHtml == playerScoreHtml){
            alert("TIE! REFRESH TO PLAY AGAIN")
        } 
        roundNumber.textContent = roundString + ROUNDNUM
    }
    else if (player == "rock" && computer == "paper"){
        computerScoreHtml++;
        computerScore.textContent = "Computer "+scoreString+computerScoreHtml;
        ROUNDNUM++
        if (ROUNDNUM == 6 && playerScoreHtml>computerScoreHtml){
            alert("YOU WIN! REFRESH TO PLAY AGAIN")
        }
         if (ROUNDNUM == 6 && computerScoreHtml>playerScoreHtml){
            alert("YOU LOSE! REFRESH TO PLAY AGAIN")
        }
        if (ROUNDNUM == 6 && computerScoreHtml == playerScoreHtml){
            alert("TIE! REFRESH TO PLAY AGAIN")
        } 
        roundNumber.textContent = roundString + ROUNDNUM
    }
    else if (player == "paper" && computer == "scissors"){
        computerScoreHtml++;
        computerScore.textContent = "Computer "+scoreString+computerScoreHtml;
        ROUNDNUM++
        if (ROUNDNUM == 6 && playerScoreHtml>computerScoreHtml){
            alert("YOU WIN! REFRESH TO PLAY AGAIN")
        }
         if (ROUNDNUM == 6 && computerScoreHtml>playerScoreHtml){
            alert("YOU LOSE! REFRESH TO PLAY AGAIN")
        }
        if (ROUNDNUM == 6 && computerScoreHtml == playerScoreHtml){
            alert("TIE! REFRESH TO PLAY AGAIN")
        }
        roundNumber.textContent = roundString + ROUNDNUM 
 
    }
    else if (player == "paper" && computer == "rock"){
        playerScoreHtml++;
        playerScore.textContent = "Player " +scoreString+playerScoreHtml;
        ROUNDNUM++
        if (ROUNDNUM == 6 && playerScoreHtml>computerScoreHtml){
            alert("YOU WIN! REFRESH TO PLAY AGAIN")
        }
         if (ROUNDNUM == 6 && computerScoreHtml>playerScoreHtml){
            alert("YOU LOSE! REFRESH TO PLAY AGAIN")
        }
        if (ROUNDNUM == 6 && computerScoreHtml == playerScoreHtml){
            alert("TIE! REFRESH TO PLAY AGAIN")
        }
        roundNumber.textContent = roundString + ROUNDNUM
    }
    else if (player == "scissors" && computer == "paper"){
        playerScoreHtml++;
        playerScore.textContent = "Player " +scoreString+playerScoreHtml
        ROUNDNUM++
        if (ROUNDNUM == 6 && playerScoreHtml>computerScoreHtml){
            alert("YOU WIN! REFRESH TO PLAY AGAIN")
        }
         if (ROUNDNUM == 6 && computerScoreHtml>playerScoreHtml){
            alert("YOU LOSE! REFRESH TO PLAY AGAIN")
        }
        if (ROUNDNUM == 6 && computerScoreHtml == playerScoreHtml){
            alert("TIE! REFRESH TO PLAY AGAIN")
        }
        roundNumber.textContent = roundString + ROUNDNUM
    }
    else if (player == "scissors" && computer == "rock"){
        computerScoreHtml++;
        computerScore.textContent = "Computer "+scoreString+computerScoreHtml;
        ROUNDNUM++
        if (ROUNDNUM == 6 && playerScoreHtml>computerScoreHtml){
            alert("YOU WIN! REFRESH TO PLAY AGAIN")
        }
         if (ROUNDNUM == 6 && computerScoreHtml>playerScoreHtml){
            alert("YOU LOSE! REFRESH TO PLAY AGAIN")
        }
        if (ROUNDNUM == 6 && computerScoreHtml == playerScoreHtml){
            alert("TIE! REFRESH TO PLAY AGAIN")
        }
        roundNumber.textContent = roundString + ROUNDNUM
    }
}

announcement.textContent = "Choose an option to play"


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
