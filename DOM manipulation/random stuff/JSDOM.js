var body = document.querySelector("body");

var h1 = document.querySelector("h1")
var isBlue = false;

// setInterval(function() {
//     if (isBlue) {
//         body.style.background = "white";
//     } else {
//         body.style.background = "blue";
//     }
//     isBlue=!isBlue;
// },100);

h1.addEventListener("click",function () {
    alert("h1 was clicked!");
    h1.style.background = "orange";
})

var lis = document.querySelectorAll("li");

for(var i = 0; i<lis.length;i++){
    lis[i].addEventListener("click", function() {
        if (this.style.background == "white" ){

            this.style.background="pink";
        }
        else{
            this.style.background="white";
        }
    })
}

var b = document.querySelector("button");
isPurple = false;
b.addEventListener("click",function () {
    alert("clicked");

})