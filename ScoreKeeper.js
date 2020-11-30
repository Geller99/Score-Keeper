
var p1Button = document.querySelector('#player1')
var p2Button = document.querySelector("#player2")
var h1 = document.querySelector("#user1")
var h2 = document.querySelector("#user2")
var reset = document.querySelector("#reset")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore;
var playingTo = document.querySelector("#textBox");
var inputText = document.querySelector("#input");
var winningScoreDisplay = document.querySelector("#value")



p1Button.addEventListener("click", function (){
    if(!gameOver){
        p1Score++;
        if(p1Score == winningScore) {
            h1.style.color = "green"
            gameOver = true;
        }
        h1.textContent = p1Score;
    }

    console.log(p1Score);
    h1.textContent = p1Score
})

p2Button.addEventListener("click", function (){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore) {
            h2.style.color = "red"
            gameOver = true;
        }
        h2.textContent = p2Score;
    }
    console.log(p2Score);
    h2.textContent = p2Score
})

inputText.addEventListener("change", function(){
    winningScoreDisplay.innerText = inputText.value
    winningScore = inputText.value
})


reset.addEventListener("click", function() {
    alert("Player Scores will now be reset!")
    p1Score = 0
    p2Score = 0
    h1.innerText = p1Score
    h2.innerText = p2Score
    gameOver = false
    h1.style.color = "black"
    h2.style.color = "black"
    winningScoreDisplay.innerText = "Enter a Value";
})
