"use strict";

function getLengthOfMissingArray(arrayOfArrays) {
    const arr = arrayOfArrays.map(x => x.length).sort((a, b) => a - b);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] > 1) {return arr[i - 1] + 1;}
    }
}

console.log(getLengthOfMissingArray([[4, 1, 2],
    [1, 1, 2, 3],
    [3, 3, 1, 0, 2],
    [1, 3, 4, 1, 3, 0],
    [1, 1, 1, 0, 3, 1, 3, 1],
    [0, 0, 0, 0, 1, 0, 3, 4, 0],
    [3, 1, 2, 3, 2, 4, 0, 3, 1, 4]]));

//
function calculateHypotenuse(a,b){
    if (isNaN('0' + a + b)) {throw 'Error!';}
    return Math.pow(a ** 2 + b ** 2, 1/2).toFixed(3);
}
//
function spinWords(string){
    return string.split(" ").map(word => word.length >= 5 ? word.split("").reverse().join(""): word).join(" ");
}
//////

function sortArray(array) {
    const odd = [];
    const filteredArray = [...array].map(x => {
      if (x % 2 != 0) {
        odd.push(x);
        return "*";
      }
      else {
          return x;
        }
    });
     const sortedOdd = odd.sort((a, b) => a - b);
     let j = 0;
     console.log(filteredArray);
     console.log(odd);
    for (let i = 0; i < filteredArray.length; i++){
      if (filteredArray[i] == "*") {
        filteredArray[i] = sortedOdd[j];
        j++;
      }
    }
    return filteredArray;
  }
  console.log(sortArray([5, 3, 2, 8, 1, 4]));

