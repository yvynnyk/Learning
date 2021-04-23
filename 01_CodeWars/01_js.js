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

//If the number has an integer square root, take this, otherwise square the number.
//[4,3,9,7,2,1] -> [2,9,3,49,4,1]

function squareOrSquareRoot(array) {
    return array.map(x => Math.pow(x, 1/2) % 1 ? Math.pow(x, 2) : Math.pow(x, 1/2));  
}

//123456 --> 654321
//105 --> 510
//12 --> 21

function superSize(num){
    return +[...String(num)].sort((a, b) => b - a).join("");
}

console.log(superSize(700000000001) ==710000000000);

//Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.
//If the sequence is empty, you should return 0.

function evenLast(numbers) {
    return numbers.length != 0 ? [...numbers.filter((x, i) => i % 2 == 0)].reduce((sum, num) => sum + num) * numbers[numbers.length - 1] : 0
}

//solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
//solution(null); // should return []

function solution(nums){
    return Array.isArray(nums) ? nums.sort((a, b) => a - b) : [];
}


//The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    return [...Number(n).toString(2)].reduce((a, b) => a + +b, 0)
};

//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
    return arr.sort()[0] == arr.sort()[1] ? arr.sort()[arr.length - 1] : arr.sort()[0]
}
  
//[2, 4, 0, 100, 4, 11, 2602, 36]
//Should return: 11 (the only odd number)

//[160, 3, 1719, 19, 11, 13, -21]
//Should return: 160 (the only even number)

function findOutlier(integers){
    return integers.filter(x => x % 2 == 0).length == 1 ? integers.filter(x => x % 2 == 0)[0] : integers.filter(x => x % 2 != 0)[0]
}


//var numbers = [1, 2, 3, 4, 5];
//numbers.square();  // must return [1, 4, 9, 16, 25]
//numbers.cube();    // must return [1, 8, 27, 64, 125]
//numbers.average(); // must return 3
//numbers.sum();     // must return 15
//numbers.even();    // must return [2, 4]
//numbers.odd();     // must return [1, 3, 5]

Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }

//Object.assign(Array.prototype, {methods})

//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    let res = [];
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] != iterable[i+1]) {
        res.push(iterable[i])
      }
    }
    return res;
}
//prime
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    else {
      if (num == 2) {return true;}
      else if (num % 2 == 0) {return false;}
      else {
        for (let i = 2; i < num; i ++) {
          if (num % i == 0) {
            return false;
          }
        }
        return true;
      }
    }
  }

//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
function count (string) {  
  let obj = {}
  let arr = [...new Set (string)].forEach(char => {
    obj[char] = string.split("").filter(x => x == char).length;
  })
  return obj;
}


//solution("camelCasing")  ==  "camel Casing"

function solution(string) {
    return [...string].map(x => x == x.toUpperCase() ? " " + x : x).join("");
}

//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
function digital_root(n) {
    let N = String(n).split("").reduce((a, b) => +a + +b, 0)
    if ( N < 10) {return N}
    return digital_root(N)
  }

//It should remove all values from list a, which are present in list b keeping their order.
function arrayDiff(a, b) {
    let arr = [...a]
     b.forEach(d => {
       arr = arr.filter(x => x != d);
     })
     return arr
}

arrayDiff([1,2,3], [1,2]);


//"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice

function duplicateCount(text){
    let counter = 0;
    text = text.toLowerCase();
    for (let i = 0; i < text.length; i++) {
      if (text.length - text.split(text[i]).join("").length >= 2 ) {
        text = text.split(text[i]).join("")
        counter++
      }
    }
    return counter
  }

  duplicateCount("aabbcde")

  //