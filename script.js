// test
const test = 1234;
const testLoad = 4321;

// end

//todo list
// button changes correct line

let line = document.getElementById("inputLine");

let alpha = testLoad;

//index page variables
//index left
let indexAlpha = 1;
let indexBravo = 2;
let indexCharlie = 3;
let indexDelta = 4;

//index right
let indexEcho = 5;
let indexFoxtrot = 6;
let indexGolf = 7;
let indexIndigo = 8;

function pageLoad() {
    index();
}

function keyStroke(clicked) {
    if (line == null) {
        line = clicked;
        document.getElementById("inputLine").innerHTML = line;
    } else {
        line = line + clicked;
        document.getElementById("inputLine").innerHTML = line;
    }
}

function clearLine() {
    line = line.slice(0, -1);
    document.getElementById("inputLine").innerHTML = line;
}

function updateLine() {
    document.getElementById("topLeft").innerHTML = line;
    line = null;
    document.getElementById("inputLine").innerHTML = line;
}

function updateLine1() {
    document.getElementById("midLeft").innerHTML = line;
    line = null;
    document.getElementById("inputLine").innerHTML = line;
}

function updateLine2() {
    document.getElementById("lowLeft").innerHTML = line;
    line = null;
    document.getElementById("inputLine").innerHTML = line;
}

function updateLine3() {
    document.getElementById("botLeft").innerHTML = line;
    line = null;
    document.getElementById("inputLine").innerHTML = line;
}

function updateLine4() {
    document.getElementById("topRight").innerHTML = line;
    line = null;
    document.getElementById("inputLine").innerHTML = line;
}

function updateLine5() {
    document.getElementById("midRight").innerHTML = line;
    line = null;
    document.getElementById("inputLine").innerHTML = line;
}

function updateLine6() {
    document.getElementById("lowRight").innerHTML = line;
    line = null;
    document.getElementById("inputLine").innerHTML = line;
}

function updateLine7() {
    document.getElementById("botRight").innerHTML = line;
    line = null;
    document.getElementById("inputLine").innerHTML = line;
}

function index() {

    document.getElementById("topLeft").innerHTML = indexAlpha;
    document.getElementById("midLeft").innerHTML = indexBravo;
    document.getElementById("lowLeft").innerHTML = indexCharlie;
    document.getElementById("botLeft").innerHTML = indexDelta;

    document.getElementById("topRight").innerHTML = indexEcho;
    document.getElementById("midRight").innerHTML = indexFoxtrot;
    document.getElementById("lowRight").innerHTML = indexGolf;
    document.getElementById("botRight").innerHTML = indexIndigo;
}