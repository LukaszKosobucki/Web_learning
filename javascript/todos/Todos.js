

var todos = [];

window.setTimeout(function() {
    var mainLoop = true;
    while (mainLoop!==false) {
        var decision = prompt("What do you want me to do? ");
        if (decision==="new") {
            var add = prompt("What you want me to add to the Todos?");
            console.log("you added " + add + " to the list :)")
            todos.push(add);
        }
        else if (decision==="list") {
            console.log("*******");
            for (i=0 ; i<todos.length; i++) {
                console.log(i+ ": " + todos[i]);
            }
            console.log("*******");
        }
        else if (decision ==="delete") {
            var del = prompt("type index of an item");
            console.log("you have deleted " + todos[del] + " from the list :(")
            todos.splice(del,1);
        }
        else if (decision==="quit") {
            console.log("You're quiting the application, bye.");
            mainLoop=false;
        }
        else{
            alert("you enter a wrong commend");
        }
    }
},500);

