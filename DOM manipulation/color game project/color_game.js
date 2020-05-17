var colors = [];
var numOfSq = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var answerDis = document.getElementById("answer");
var colorDis = document.getElementById("picked");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupButtons();
    setupSquares();
    reset();
}

function setupButtons() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            for(var j = 0; j < modeButtons.length; j++) {
                modeButtons[j].classList.remove("selected");
            }
            this.classList.add("selected");
            this.textContent === "EASY" ? numOfSq = 3: numOfSq = 6;
            reset();

        })
    }
}

function setupSquares() {
    for (var i = 0; i<squares.length; i++ ){
        squares[i].addEventListener("click",function () {
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor ) {
                answerDis.textContent = "Correct";
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again!";
                for (var i=0; i<colors.length;i++) {
                    squares[i].style.backgroundColor = clickedColor;
                }
            } else {
                this.style.backgroundColor = "#232323";
                answerDis.textContent = "Try Again";
            }
        })
    }
}

function reset() {
    colors = generateRandomColors(numOfSq);
    pickedColor = colorPicker();
    colorDis.textContent = pickedColor;
    h1.style.backgroundColor = "#2c3e50";
    resetButton.textContent = "New Colors";
    answerDis.textContent = "";
    for (var i = 0; i<squares.length; i++ ) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }

    }
}

resetButton.addEventListener("click", function () {
    reset()
});

function colorPicker() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    var array = [];
    for(var i = 0; i < num; i++){
        array[i] = randomColor()
    }
    return array;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue +")"
}