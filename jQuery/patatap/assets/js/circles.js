var circles = [];
var letter = 'A';
var colors = [];

for(var i=0; i<26;i++){
    colors.push("rgba(" + 255*Math.random() + ", " + 255*Math.random() + ", " + 255*Math.random() + ", .7)" );
}
sounds = [,]

var keyDataA = {
    a: {
        color: colors[0],
        sound: new Howl({
            src: ['assets/sounds/A/bubbles.mp3']})
    },    s: {
        color: colors[1],
        sound: new Howl({
            src: ['assets/sounds/A/clay.mp3']})
    },    d: {
        color: colors[2],
        sound: new Howl({
            src: ['assets/sounds/A/confetti.mp3']})
    },    f: {
        color: colors[3],
        sound: new Howl({
            src: ['assets/sounds/A/corona.mp3']})
    },    g: {
        color: colors[4],
        sound: new Howl({
            src: ['assets/sounds/A/dotted-spiral.mp3']})
    },    h: {
        color: colors[5],
        sound: new Howl({
            src: ['assets/sounds/A/flash-1.mp3']})
    },    j: {
        color: colors[6],
        sound: new Howl({
            src: ['assets/sounds/A/flash-2.mp3']})
    },    k: {
        color: colors[7],
        sound: new Howl({
            src: ['assets/sounds/A/flash-3.mp3']})
    },    l: {
        color: colors[8],
        sound: new Howl({
            src: ['assets/sounds/A/glimmer.mp3']})
    },    q: {
        color: colors[9],
        sound: new Howl({
            src: ['assets/sounds/A/moon.mp3']})
    },    w: {
        color: colors[10],
        sound: new Howl({
            src: ['assets/sounds/A/pinwheel.mp3']})
    },    e: {
        color: colors[11],
        sound: new Howl({
            src: ['assets/sounds/A/piston-1.mp3']})
    },    r: {
        color: colors[12],
        sound: new Howl({
            src: ['assets/sounds/A/piston-2.mp3']})
    },    t: {
        color: colors[13],
        sound: new Howl({
            src: ['assets/sounds/A/piston-3.mp3']})
    },    y: {
        color: colors[14],
        sound: new Howl({
            src: ['assets/sounds/A/prism-1.mp3']})
    },    u: {
        color: colors[15],
        sound: new Howl({
            src: ['assets/sounds/A/prism-2.mp3']})
    },    i: {
        color: colors[16],
        sound: new Howl({
            src: ['assets/sounds/A/prism-3.mp3']})
    },    o: {
        color: colors[17],
        sound: new Howl({
            src: ['assets/sounds/A/splits.mp3']})
    },    p: {
        color: colors[18],
        sound: new Howl({
            src: ['assets/sounds/A/squiggle.mp3']})
    },    z: {
        color: colors[19],
        sound: new Howl({
            src: ['assets/sounds/A/strike.mp3']})
    },    x: {
        color: colors[20],
        sound: new Howl({
            src: ['assets/sounds/A/suspension.mp3']})
    },    c: {
        color: colors[21],
        sound: new Howl({
            src: ['assets/sounds/A/timer.mp3']})
    },    v: {
        color: colors[22],
        sound: new Howl({
            src: ['assets/sounds/A/ufo.mp3']})
    },    b: {
        color: colors[23],
        sound: new Howl({
            src: ['assets/sounds/A/veil.mp3']})
    },    n: {
        color: colors[24],
        sound: new Howl({
            src: ['assets/sounds/A/wipe.mp3']})
    },    m: {
        color: colors[25],
        sound: new Howl({
            src: ['assets/sounds/A/zig-zag.mp3']})
    },
};

var keyDataB = {
    a: {
        color: colors[0],
        sound: new Howl({
            src: ['assets/sounds/B/bubbles.mp3']})
    },    s: {
        color: colors[1],
        sound: new Howl({
            src: ['assets/sounds/B/clay.mp3']})
    },    d: {
        color: colors[2],
        sound: new Howl({
            src: ['assets/sounds/B/confetti.mp3']})
    },    f: {
        color: colors[3],
        sound: new Howl({
            src: ['assets/sounds/B/corona.mp3']})
    },    g: {
        color: colors[4],
        sound: new Howl({
            src: ['assets/sounds/B/dotted-spiral.mp3']})
    },    h: {
        color: colors[5],
        sound: new Howl({
            src: ['assets/sounds/B/flash-1.mp3']})
    },    j: {
        color: colors[6],
        sound: new Howl({
            src: ['assets/sounds/B/flash-2.mp3']})
    },    k: {
        color: colors[7],
        sound: new Howl({
            src: ['assets/sounds/B/flash-3.mp3']})
    },    l: {
        color: colors[8],
        sound: new Howl({
            src: ['assets/sounds/B/glimmer.mp3']})
    },    q: {
        color: colors[9],
        sound: new Howl({
            src: ['assets/sounds/B/moon.mp3']})
    },    w: {
        color: colors[10],
        sound: new Howl({
            src: ['assets/sounds/B/pinwheel.mp3']})
    },    e: {
        color: colors[11],
        sound: new Howl({
            src: ['assets/sounds/B/piston-1.mp3']})
    },    r: {
        color: colors[12],
        sound: new Howl({
            src: ['assets/sounds/B/piston-2.mp3']})
    },    t: {
        color: colors[13],
        sound: new Howl({
            src: ['assets/sounds/B/piston-3.mp3']})
    },    y: {
        color: colors[14],
        sound: new Howl({
            src: ['assets/sounds/B/prism-1.mp3']})
    },    u: {
        color: colors[15],
        sound: new Howl({
            src: ['assets/sounds/B/prism-2.mp3']})
    },    i: {
        color: colors[16],
        sound: new Howl({
            src: ['assets/sounds/B/prism-3.mp3']})
    },    o: {
        color: colors[17],
        sound: new Howl({
            src: ['assets/sounds/B/splits.mp3']})
    },    p: {
        color: colors[18],
        sound: new Howl({
            src: ['assets/sounds/B/squiggle.mp3']})
    },    z: {
        color: colors[19],
        sound: new Howl({
            src: ['assets/sounds/B/strike.mp3']})
    },    x: {
        color: colors[20],
        sound: new Howl({
            src: ['assets/sounds/B/suspension.mp3']})
    },    c: {
        color: colors[21],
        sound: new Howl({
            src: ['assets/sounds/B/timer.mp3']})
    },    v: {
        color: colors[22],
        sound: new Howl({
            src: ['assets/sounds/B/ufo.mp3']})
    },    b: {
        color: colors[23],
        sound: new Howl({
            src: ['assets/sounds/B/veil.mp3']})
    },    n: {
        color: colors[24],
        sound: new Howl({
            src: ['assets/sounds/B/wipe.mp3']})
    },    m: {
        color: colors[25],
        sound: new Howl({
            src: ['assets/sounds/B/zig-zag.mp3']})
    },

};

var keyDataC = {
    a: {
        color: colors[0],
        sound: new Howl({
            src: ['assets/sounds/C/bubbles.mp3']})
    },    s: {
        color: colors[1],
        sound: new Howl({
            src: ['assets/sounds/C/clay.mp3']})
    },    d: {
        color: colors[2],
        sound: new Howl({
            src: ['assets/sounds/C/confetti.mp3']})
    },    f: {
        color: colors[3],
        sound: new Howl({
            src: ['assets/sounds/C/corona.mp3']})
    },    g: {
        color: colors[4],
        sound: new Howl({
            src: ['assets/sounds/C/dotted-spiral.mp3']})
    },    h: {
        color: colors[5],
        sound: new Howl({
            src: ['assets/sounds/C/flash-1.mp3']})
    },    j: {
        color: colors[6],
        sound: new Howl({
            src: ['assets/sounds/C/flash-2.mp3']})
    },    k: {
        color: colors[7],
        sound: new Howl({
            src: ['assets/sounds/C/flash-3.mp3']})
    },    l: {
        color: colors[8],
        sound: new Howl({
            src: ['assets/sounds/C/glimmer.mp3']})
    },    q: {
        color: colors[9],
        sound: new Howl({
            src: ['assets/sounds/C/moon.mp3']})
    },    w: {
        color: colors[10],
        sound: new Howl({
            src: ['assets/sounds/C/pinwheel.mp3']})
    },    e: {
        color: colors[11],
        sound: new Howl({
            src: ['assets/sounds/C/piston-1.mp3']})
    },    r: {
        color: colors[12],
        sound: new Howl({
            src: ['assets/sounds/C/piston-2.mp3']})
    },    t: {
        color: colors[13],
        sound: new Howl({
            src: ['assets/sounds/C/piston-3.mp3']})
    },    y: {
        color: colors[14],
        sound: new Howl({
            src: ['assets/sounds/C/prism-1.mp3']})
    },    u: {
        color: colors[15],
        sound: new Howl({
            src: ['assets/sounds/C/prism-2.mp3']})
    },    i: {
        color: colors[16],
        sound: new Howl({
            src: ['assets/sounds/C/prism-3.mp3']})
    },    o: {
        color: colors[17],
        sound: new Howl({
            src: ['assets/sounds/C/splits.mp3']})
    },    p: {
        color: colors[18],
        sound: new Howl({
            src: ['assets/sounds/C/squiggle.mp3']})
    },    z: {
        color: colors[19],
        sound: new Howl({
            src: ['assets/sounds/C/strike.mp3']})
    },    x: {
        color: colors[20],
        sound: new Howl({
            src: ['assets/sounds/C/suspension.mp3']})
    },    c: {
        color: colors[21],
        sound: new Howl({
            src: ['assets/sounds/C/timer.mp3']})
    },    v: {
        color: colors[22],
        sound: new Howl({
            src: ['assets/sounds/C/ufo.mp3']})
    },    b: {
        color: colors[23],
        sound: new Howl({
            src: ['assets/sounds/C/veil.mp3']})
    },    n: {
        color: colors[24],
        sound: new Howl({
            src: ['assets/sounds/C/wipe.mp3']})
    },    m: {
        color: colors[25],
        sound: new Howl({
            src: ['assets/sounds/C/zig-zag.mp3']})
    },
};

var keyDataD = {
    a: {
        color: colors[0],
        sound: new Howl({
            src: ['assets/sounds/D/bubbles.mp3']})
    },    s: {
        color: colors[1],
        sound: new Howl({
            src: ['assets/sounds/D/clay.mp3']})
    },    d: {
        color: colors[2],
        sound: new Howl({
            src: ['assets/sounds/D/confetti.mp3']})
    },    f: {
        color: colors[3],
        sound: new Howl({
            src: ['assets/sounds/D/corona.mp3']})
    },    g: {
        color: colors[4],
        sound: new Howl({
            src: ['assets/sounds/D/dotted-spiral.mp3']})
    },    h: {
        color: colors[5],
        sound: new Howl({
            src: ['assets/sounds/D/flash-1.mp3']})
    },    j: {
        color: colors[6],
        sound: new Howl({
            src: ['assets/sounds/D/flash-2.mp3']})
    },    k: {
        color: colors[7],
        sound: new Howl({
            src: ['assets/sounds/D/flash-3.mp3']})
    },    l: {
        color: colors[8],
        sound: new Howl({
            src: ['assets/sounds/D/glimmer.mp3']})
    },    q: {
        color: colors[9],
        sound: new Howl({
            src: ['assets/sounds/D/moon.mp3']})
    },    w: {
        color: colors[10],
        sound: new Howl({
            src: ['assets/sounds/D/pinwheel.mp3']})
    },    e: {
        color: colors[11],
        sound: new Howl({
            src: ['assets/sounds/D/piston-1.mp3']})
    },    r: {
        color: colors[12],
        sound: new Howl({
            src: ['assets/sounds/D/piston-2.mp3']})
    },    t: {
        color: colors[13],
        sound: new Howl({
            src: ['assets/sounds/D/piston-3.mp3']})
    },    y: {
        color: colors[14],
        sound: new Howl({
            src: ['assets/sounds/D/prism-1.mp3']})
    },    u: {
        color: colors[15],
        sound: new Howl({
            src: ['assets/sounds/D/prism-2.mp3']})
    },    i: {
        color: colors[16],
        sound: new Howl({
            src: ['assets/sounds/D/prism-3.mp3']})
    },    o: {
        color: colors[17],
        sound: new Howl({
            src: ['assets/sounds/D/splits.mp3']})
    },    p: {
        color: colors[18],
        sound: new Howl({
            src: ['assets/sounds/D/squiggle.mp3']})
    },    z: {
        color: colors[19],
        sound: new Howl({
            src: ['assets/sounds/D/strike.mp3']})
    },    x: {
        color: colors[20],
        sound: new Howl({
            src: ['assets/sounds/D/suspension.mp3']})
    },    c: {
        color: colors[21],
        sound: new Howl({
            src: ['assets/sounds/D/timer.mp3']})
    },    v: {
        color: colors[22],
        sound: new Howl({
            src: ['assets/sounds/D/ufo.mp3']})
    },    b: {
        color: colors[23],
        sound: new Howl({
            src: ['assets/sounds/D/veil.mp3']})
    },    n: {
        color: colors[24],
        sound: new Howl({
            src: ['assets/sounds/D/wipe.mp3']})
    },    m: {
        color: colors[25],
        sound: new Howl({
            src: ['assets/sounds/D/zig-zag.mp3']})
    },
};

var keyDataE = {
    a: {
        color: colors[0],
        sound: new Howl({
            src: ['assets/sounds/E/bubbles.mp3']})
    },    s: {
        color: colors[1],
        sound: new Howl({
            src: ['assets/sounds/E/clay.mp3']})
    },    d: {
        color: colors[2],
        sound: new Howl({
            src: ['assets/sounds/E/confetti.mp3']})
    },    f: {
        color: colors[3],
        sound: new Howl({
            src: ['assets/sounds/E/corona.mp3']})
    },    g: {
        color: colors[4],
        sound: new Howl({
            src: ['assets/sounds/E/dotted-spiral.mp3']})
    },    h: {
        color: colors[5],
        sound: new Howl({
            src: ['assets/sounds/E/flash-1.mp3']})
    },    j: {
        color: colors[6],
        sound: new Howl({
            src: ['assets/sounds/E/flash-2.mp3']})
    },    k: {
        color: colors[7],
        sound: new Howl({
            src: ['assets/sounds/E/flash-3.mp3']})
    },    l: {
        color: colors[8],
        sound: new Howl({
            src: ['assets/sounds/E/glimmer.mp3']})
    },    q: {
        color: colors[9],
        sound: new Howl({
            src: ['assets/sounds/E/moon.mp3']})
    },    w: {
        color: colors[10],
        sound: new Howl({
            src: ['assets/sounds/E/pinwheel.mp3']})
    },    e: {
        color: colors[11],
        sound: new Howl({
            src: ['assets/sounds/E/piston-1.mp3']})
    },    r: {
        color: colors[12],
        sound: new Howl({
            src: ['assets/sounds/E/piston-2.mp3']})
    },    t: {
        color: colors[13],
        sound: new Howl({
            src: ['assets/sounds/E/piston-3.mp3']})
    },    y: {
        color: colors[14],
        sound: new Howl({
            src: ['assets/sounds/E/prism-1.mp3']})
    },    u: {
        color: colors[15],
        sound: new Howl({
            src: ['assets/sounds/E/prism-2.mp3']})
    },    i: {
        color: colors[16],
        sound: new Howl({
            src: ['assets/sounds/E/prism-3.mp3']})
    },    o: {
        color: colors[17],
        sound: new Howl({
            src: ['assets/sounds/E/splits.mp3']})
    },    p: {
        color: colors[18],
        sound: new Howl({
            src: ['assets/sounds/E/squiggle.mp3']})
    },    z: {
        color: colors[19],
        sound: new Howl({
            src: ['assets/sounds/E/strike.mp3']})
    },    x: {
        color: colors[20],
        sound: new Howl({
            src: ['assets/sounds/E/suspension.mp3']})
    },    c: {
        color: colors[21],
        sound: new Howl({
            src: ['assets/sounds/E/timer.mp3']})
    },    v: {
        color: colors[22],
        sound: new Howl({
            src: ['assets/sounds/E/ufo.mp3']})
    },    b: {
        color: colors[23],
        sound: new Howl({
            src: ['assets/sounds/E/veil.mp3']})
    },    n: {
        color: colors[24],
        sound: new Howl({
            src: ['assets/sounds/E/wipe.mp3']})
    },    m: {
        color: colors[25],
        sound: new Howl({
            src: ['assets/sounds/E/zig-zag.mp3']})
    },
};

var keyDataF = {
    a: {
        color: colors[0],
        sound: new Howl({
            src: ['assets/sounds/F/bubbles.mp3']})
    },    s: {
        color: colors[1],
        sound: new Howl({
            src: ['assets/sounds/F/clay.mp3']})
    },    d: {
        color: colors[2],
        sound: new Howl({
            src: ['assets/sounds/F/confetti.mp3']})
    },    f: {
        color: colors[3],
        sound: new Howl({
            src: ['assets/sounds/F/corona.mp3']})
    },    g: {
        color: colors[4],
        sound: new Howl({
            src: ['assets/sounds/F/dotted-spiral.mp3']})
    },    h: {
        color: colors[5],
        sound: new Howl({
            src: ['assets/sounds/F/flash-1.mp3']})
    },    j: {
        color: colors[6],
        sound: new Howl({
            src: ['assets/sounds/F/flash-2.mp3']})
    },    k: {
        color: colors[7],
        sound: new Howl({
            src: ['assets/sounds/F/flash-3.mp3']})
    },    l: {
        color: colors[8],
        sound: new Howl({
            src: ['assets/sounds/F/glimmer.mp3']})
    },    q: {
        color: colors[9],
        sound: new Howl({
            src: ['assets/sounds/F/moon.mp3']})
    },    w: {
        color: colors[10],
        sound: new Howl({
            src: ['assets/sounds/F/pinwheel.mp3']})
    },    e: {
        color: colors[11],
        sound: new Howl({
            src: ['assets/sounds/F/piston-1.mp3']})
    },    r: {
        color: colors[12],
        sound: new Howl({
            src: ['assets/sounds/F/piston-2.mp3']})
    },    t: {
        color: colors[13],
        sound: new Howl({
            src: ['assets/sounds/F/piston-3.mp3']})
    },    y: {
        color: colors[14],
        sound: new Howl({
            src: ['assets/sounds/F/prism-1.mp3']})
    },    u: {
        color: colors[15],
        sound: new Howl({
            src: ['assets/sounds/F/prism-2.mp3']})
    },    i: {
        color: colors[16],
        sound: new Howl({
            src: ['assets/sounds/F/prism-3.mp3']})
    },    o: {
        color: colors[17],
        sound: new Howl({
            src: ['assets/sounds/F/splits.mp3']})
    },    p: {
        color: colors[18],
        sound: new Howl({
            src: ['assets/sounds/F/squiggle.mp3']})
    },    z: {
        color: colors[19],
        sound: new Howl({
            src: ['assets/sounds/F/strike.mp3']})
    },    x: {
        color: colors[20],
        sound: new Howl({
            src: ['assets/sounds/F/suspension.mp3']})
    },    c: {
        color: colors[21],
        sound: new Howl({
            src: ['assets/sounds/F/timer.mp3']})
    },    v: {
        color: colors[22],
        sound: new Howl({
            src: ['assets/sounds/F/ufo.mp3']})
    },    b: {
        color: colors[23],
        sound: new Howl({
            src: ['assets/sounds/F/veil.mp3']})
    },    n: {
        color: colors[24],
        sound: new Howl({
            src: ['assets/sounds/F/wipe.mp3']})
    },    m: {
        color: colors[25],
        sound: new Howl({
            src: ['assets/sounds/F/zig-zag.mp3']})
    },
};

var keyDataG = {
    a: {
        color: colors[0],
        sound: new Howl({
            src: ['assets/sounds/G/bubbles.mp3']})
    },    s: {
        color: colors[1],
        sound: new Howl({
            src: ['assets/sounds/G/clay.mp3']})
    },    d: {
        color: colors[2],
        sound: new Howl({
            src: ['assets/sounds/G/confetti.mp3']})
    },    f: {
        color: colors[3],
        sound: new Howl({
            src: ['assets/sounds/G/corona.mp3']})
    },    g: {
        color: colors[4],
        sound: new Howl({
            src: ['assets/sounds/G/dotted-spiral.mp3']})
    },    h: {
        color: colors[5],
        sound: new Howl({
            src: ['assets/sounds/G/flash-1.mp3']})
    },    j: {
        color: colors[6],
        sound: new Howl({
            src: ['assets/sounds/G/flash-2.mp3']})
    },    k: {
        color: colors[7],
        sound: new Howl({
            src: ['assets/sounds/G/flash-3.mp3']})
    },    l: {
        color: colors[8],
        sound: new Howl({
            src: ['assets/sounds/G/glimmer.mp3']})
    },    q: {
        color: colors[9],
        sound: new Howl({
            src: ['assets/sounds/G/moon.mp3']})
    },    w: {
        color: colors[10],
        sound: new Howl({
            src: ['assets/sounds/G/pinwheel.mp3']})
    },    e: {
        color: colors[11],
        sound: new Howl({
            src: ['assets/sounds/G/piston-1.mp3']})
    },    r: {
        color: colors[12],
        sound: new Howl({
            src: ['assets/sounds/G/piston-2.mp3']})
    },    t: {
        color: colors[13],
        sound: new Howl({
            src: ['assets/sounds/G/piston-3.mp3']})
    },    y: {
        color: colors[14],
        sound: new Howl({
            src: ['assets/sounds/G/prism-1.mp3']})
    },    u: {
        color: colors[15],
        sound: new Howl({
            src: ['assets/sounds/G/prism-2.mp3']})
    },    i: {
        color: colors[16],
        sound: new Howl({
            src: ['assets/sounds/G/prism-3.mp3']})
    },    o: {
        color: colors[17],
        sound: new Howl({
            src: ['assets/sounds/G/splits.mp3']})
    },    p: {
        color: colors[18],
        sound: new Howl({
            src: ['assets/sounds/G/squiggle.mp3']})
    },    z: {
        color: colors[19],
        sound: new Howl({
            src: ['assets/sounds/G/strike.mp3']})
    },    x: {
        color: colors[20],
        sound: new Howl({
            src: ['assets/sounds/G/suspension.mp3']})
    },    c: {
        color: colors[21],
        sound: new Howl({
            src: ['assets/sounds/G/timer.mp3']})
    },    v: {
        color: colors[22],
        sound: new Howl({
            src: ['assets/sounds/G/ufo.mp3']})
    },    b: {
        color: colors[23],
        sound: new Howl({
            src: ['assets/sounds/G/veil.mp3']})
    },    n: {
        color: colors[24],
        sound: new Howl({
            src: ['assets/sounds/G/wipe.mp3']})
    },    m: {
        color: colors[25],
        sound: new Howl({
            src: ['assets/sounds/G/zig-zag.mp3']})
    },
};


$("div#buttons").hover(function () {
    $(this).css("height","10%")
},function () {
    $(this).css("height", "3%")
})

$("#A").on("click",function () {
    letter = "A";
})
$("#B").on("click",function () {
    letter = "B";
})
$("#C").on("click",function () {
    letter = "C";
})
$("#D").on("click",function () {
    letter = "D";
})
$("#E").on("click",function () {
    letter = "E";
})
$("#F").on("click",function () {
    letter = "F";
})
$("#G").on("click",function () {
    letter = "G";
})



function onKeyDown(event) {
    // When a key is pressed, set the content of the text item:
    var x = Math.random()*view.size.width;
    var y = Math.random()*view.size.height;
    var circle = new Path.Circle(new Point(x,y),300);
    if(letter === "A"){
        keyDataA[event.key].sound.play();
        circle.fillColor=keyDataA[event.key].color;
    }else if (letter==="B"){
        keyDataB[event.key].sound.play();
        circle.fillColor=keyDataB[event.key].color;
    }else if (letter==="C"){
        keyDataC[event.key].sound.play();
        circle.fillColor=keyDataC[event.key].color;
    }else if (letter==="D"){
        keyDataD[event.key].sound.play();
        circle.fillColor=keyDataD[event.key].color;
    }else if (letter==="E"){
        keyDataE[event.key].sound.play();
        circle.fillColor=keyDataE[event.key].color;
    }else if (letter==="F"){
        keyDataF[event.key].sound.play();
        circle.fillColor=keyDataF[event.key].color;
    }else if (letter==="G"){
        keyDataG[event.key].sound.play();
        circle.fillColor=keyDataG[event.key].color;
    }
    circles.push(circle);
    Howler.volume(document.querySelector("input").value/100);
}



// The amount of circles we want to make:
var count = 150;

// Create a symbol, which we will use to place instances of later:
var path = new Path.Circle({
    center: [0, 0],
    radius: 10,
    fillColor: 'rgba(43,43,43,0.54)',
    strokeColor: 'black'
});

var symbol = new Symbol(path);

// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
    // The center position is a random point in the view:
    var center = Point.random() * view.size;
    var placedSymbol = symbol.place(center);
    placedSymbol.scale(i / count);
}

// The onFrame function is called up to 60 times a second:
function onFrame(event) {
    // Run through the active layer's children list and change
    // the position of the placed symbols:
    for (var i = 0; i < count; i++) {
        var item = project.activeLayer.children[i];

        // Move the item 1/20th of its width to the right. This way
        // larger circles move faster than smaller circles:
        item.position.x += item.bounds.width / 20;

        // If the item has left the view on the right, move it back
        // to the left:
        if (item.bounds.left > view.size.width) {
            item.position.x = -item.bounds.width;
        }
    }
    for(i=0; i<circles.length;i++){
        circles[i].scale(.9);
        circles[i].fillColor.hue+=1;
        if (circles[i].area < 1) {
            circles[i].remove();
            circles.splice(i,1);
        }
    }

}




