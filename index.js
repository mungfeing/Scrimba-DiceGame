// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const chanceBtn = document.getElementById("chanceBtn")

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
     let randomNumber = Math.floor(Math.random() * 6) + 1
     if (player1Turn){
         player1Dice.textContent=randomNumber;
         player1Score+=randomNumber;
         player1Scoreboard.textContent=player1Score;
         player1Turn = false;
         message.textContent="Player 2 Turn";
         player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
         }
     else
     { 
         player2Dice.textContent=randomNumber;
         player2Score+=randomNumber;
         player2Scoreboard.textContent=player1Score;
         player1Turn = true;
         message.textContent="Player 1 Turn";
         player1Dice.classList.add("active");
        player2Dice.classList.remove("active");
     }  
       if (player2Score >= 20){
        resetBtn.style.display="block";
        rollBtn.style.display="none";
         chanceBtn.style.display="none";
        message.textContent="Player 2 wins 🎆";
        player1Scoreboard.textContent=player1Score;
         } 
          else if(player1Score>=20){
        resetBtn.style.display="block";
        rollBtn.style.display="none";
          chanceBtn.style.display="none";
        message.textContent="Player 1 wins 🎆";
        player2Scoreboard.textContent=player2Score;
         }
         
     
 })
 

 
 resetBtn.addEventListener("click",function(){
     player1Score = 0
     player2Score = 0
     player1Turn = true
     player1Scoreboard.textContent=player1Score
     player2Scoreboard.textContent=player2Score
     message.textContent="Player 1 Turn"
     player1Dice.textContent=0
     player2Dice.textContent=0
     resetBtn.style.display="none";
     rollBtn.style.display="block";
    chanceBtn.style.display="block";
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
     
 })

chanceBtn.addEventListener("click",function(){
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  if (randomNumber < 4){
    randomNumber= 0   
  }else{
    randomNumber= 6
  }  if (player1Turn){
         player1Dice.textContent=randomNumber;
         player1Score+=randomNumber;
         player1Scoreboard.textContent=player1Score;
         player1Turn = false;
         message.textContent="Player 2 Turn";
         player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
         }
     else
     { 
         player2Dice.textContent=randomNumber;
         player2Score+=randomNumber;
         player2Scoreboard.textContent=player1Score;
         player1Turn = true;
         message.textContent="Player 1 Turn";
         player1Dice.classList.add("active");
        player2Dice.classList.remove("active");
     }  
       if (player2Score >= 20){
        resetBtn.style.display="block";
        rollBtn.style.display="none";
        chanceBtn.style.display="none";
        message.textContent="Player 2 wins 🎆";
        player1Scoreboard.textContent=player1Score;
         } 
          else if(player1Score>=20){
        resetBtn.style.display="block";
        chanceBtn.style.display="none";
        rollBtn.style.display="none";
        message.textContent="Player 1 wins 🎆";
        player2Scoreboard.textContent=player2Score;
         }
         
     
 })