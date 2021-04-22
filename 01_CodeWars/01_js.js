//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.

function areaOrPerimeter (l , w) {
    return l == w ? l * w: 2 * (l + w);
}

console.log(areaOrPerimeter(4 , 4) == 16);
console.log(areaOrPerimeter(6, 10) == 32);

//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
//Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

function updateLight(current) {
    return current === "green" ? "yellow" :
           current === "yellow" ? "red" : "green"; 
}

console.log(updateLight("green") === "yellow");
console.log(updateLight("yellow") === "red");
console.log(updateLight("red") === "green");

//In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.
//Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move (position, roll) {
    return roll * 2 + position;
}

console.log(move(0, 4) == 8);

//1 --> 0 (the first even number is 0)
//3 --> 4 (the 3rd even number is 4 (0, 2, 4))
//100 --> 198
//1298734 --> 2597466

function nthEven(n){
    return (n - 1) * 2;
}

console.log(nthEven(100) == 198);

//For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be
//seatsInTheater(nCols, nRows, col, row) === 96

function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row);
}

console.log(seatsInTheater(16,11,5,3) == 96);