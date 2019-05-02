var makeARandomNumber = function(){
    return Array.from({length: 21}, () => Math.floor(Math.random() * 6));   
}
var randoms = Array(21).fill(0).map(makeARandomNumber);


var side = 45;

var matrix = randoms;

var grassArr = [];
var eaterArr = [];
var predatorArr = [];
var antipredatorArr = [];
var antiallArr = [];

function setup() {
    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                eater = new Eater(x, y);
                eaterArr.push(eater);
            }
            else if (matrix[y][x] == 3) {
                predator = new Predator(x, y);
                predatorArr.push(predator);
            }
            else if (matrix[y][x] == 4) {
                antipredator = new AntiPredator(x, y);
                antipredatorArr.push(antipredator);
            }
            else if (matrix[y][x] == 5) {
                antiall = new AntiAll(x, y);
                antiallArr.push(antiall);
            }
        }
    }
}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].multiply();
    }


    for (var i in eaterArr) {
        eaterArr[i].move();
        eaterArr[i].eat();
        eaterArr[i].die();

    }
    for (var i in predatorArr) {
        predatorArr[i].move();
    }
    for (var i in antipredatorArr) {
        antipredatorArr[i].move();
    }
    for (var i in antiallArr) {
        antipredatorArr[i].move();
    }
}