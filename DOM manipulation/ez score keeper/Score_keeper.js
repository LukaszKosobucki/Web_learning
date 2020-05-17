var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var reset = document.querySelector("#reset");
var h2 = document.querySelector("h2");
var numInput = document.querySelector("input[type = 'number']");
var p1score=0;
var p2score=0;
var winningscore = 5;
var gameOver = false;
var score = document.querySelector("#score");

p1Button.addEventListener("click", function () {
    if (!gameOver){
        p1score++;
        if(p1score === winningscore){
            gameOver=!gameOver;
        }
        h2.textContent = p1score + " to " + p2score;
    }
})
p2Button.addEventListener("click",function () {
    if (!gameOver){
        p2score++;
        if(p2score === winningscore){
            gameOver=!gameOver;
        }
        h2.textContent = p1score + " to " + p2score;
    }
})
reset.addEventListener("click",function () {
    reset();
})

function reset() {
    p1score=0;
    p2score=0;
    h2.textContent = p1score + " to " + p2score;
    gameOver=!gameOver;
}

numInput.addEventListener("change", function () {
    winningscore = Number(this.value);
    score.textContent = winningscore;
    reset();
})