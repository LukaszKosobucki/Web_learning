

function printReverse(array) {
    for (var i=array.length-1; i>=0;i--){
        console.log("//" + array[i]);
    }
}

function isUniform(array) {
    for (var i = 1; i<array.length; i++ ) {
        if (array[0] !== array[i]) {
            return false;
        }
    }
    return true;
}

function sumArray(array) {
    var sum = 0;
    for (var i = 0; i<array.length; i++) {
        sum+=array[i];
    }
    return sum;
}

function max(array) {
    var max = array[0];
    for (var i = 1; i<array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}


var movieDB= [
    {title: "Interstellar",
     rating: "10 stars",
     hasWatched: "watched"},
    {title: "Frozen 2",
     rating: "10 stars",
     hasWatched: "watched"},
    {title: "pewnego razu w hollywood",
     rating: "not rated yet",
     hasWatched: "not seen"}
]

for (var i = 0; i<movieDB.length;i++){
    console.log("You have " + movieDB[i]["hasWatched"] + " " +movieDB[i]["title"] + " - " + movieDB[i]["rating"])
}