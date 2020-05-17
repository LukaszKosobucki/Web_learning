var list_colours = [];
var answer = [true,6];
var choosen_color
init();

function init() {
    click_square()
    list_fill()
    $("button").on("click",function () {
        list_fill()
    })
}

function random_color(decision) {
    var r = Math.round(Math.random() *255);
    var g = Math.round(Math.random() *255);
    var b = Math.round(Math.random() *255);
    if(decision === true) {
        var a = Math.round(Math.random()*100)/100;
        return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
    }else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

function choose_color() {
    choosen_color = list_colours[Math.round(Math.random()*list_colours.length)];
    return choosen_color
}


function decisions() {
    $("#easy").on("click",function () {
        answer = [false,3];
        $("#easy").addClass(".selected");
        $("#hard").removeClass(".selected")
    })
    $("#hard").on("click",function () {
        answer = [true, 6]; //zwraca wartosc logiczna poziomu trudnosci i odpowiadajacą mu ilocs kolorów
        $("#hard").addClass(".selected");
        $("#easy").removeClass(".selected")
    })
}

function list_fill() {
    decisions()
    list_colours=[];
    for(i = 0; i<answer[1];i++ ){
        list_colours.push(random_color(answer[0]));
    };
    choose_color()
    $("#rgb").text(choosen_color);
    var i = 0;
    $("div.square").each(function () {
        if(list_colours[i]) {
            $(this).css({"background-color":list_colours[i],
                        "display": "block"});
        }else {
            $(this).css("display","none");
        }
        i+=1
    })
    $("#answer").text("");
    $("h1").css("background-color","#2c3e50");
}

function click_square() {
    $("div.square").on("click", function () {
        if($(this).css("background-color") === choosen_color) {
            $("div.square").each(function () {
                $(this).css("background-color",choosen_color);
                $("h1").css("background-color",choosen_color)
                $("#answer").text("Congratulations");
            })
        }else {
            $(this).css("background-color",$("body").css("background-color"));
            $("#answer").text("Try Again");
        }
    })
}
