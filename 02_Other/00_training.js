"use strict";

class Calculator {
    constructor() {
        this.read = (a, b) => {
            this.a = a;
            this.b = b;
        };
        this.sum = () => this.a + this.b;
        this.mul = () => this.a * this.b;
    }
}
const calculator = new Calculator ();
calculator.read(5, 20);
console.log(calculator.sum());
console.log(calculator.mul());

class Acumulator {
    constructor(value) {
        this.value = value;
        this.read = function (number) {
            this.value += number;
        };
        this.show = () => console.log(this.value);
    }
}
const acc = new Acumulator(11);
acc.read(2);
acc.read(5);
acc.read(12);
acc.read(8);
acc.show();


let admin = Symbol("admin");
let country = Symbol("country");
const user = {
    name: "alex",
    age: 28,
    [country]: "USA",
    [admin]: true,
};

console.log(user[admin]);

function Ask () {
    this.ask = function (a, b) {
        this.a = +a;
        this.b = +b;
        console.log(this.a + this.b);
    };
}
const a = new Ask ();
a.ask("2", "10");


function checkSpam (str) {
    const reg = /viagra/ig;
    console.log(str.search(reg));
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");
////
function camelize(str) {
    return str.split("-").map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
}

console.log(camelize("-webkit-color"));
/////
let arr = [5, 3, 8, 1];
const filterRange = function (arr, a, b) {
    return arr.filter(x => x >= a && x <= b);
};

let filtered = filterRange(arr, 1, 4);
console.log( filtered ); // 3,1 (совпадающие значения)
console.log( arr ); // 5,3,8,1 (без изменений)

//////
let arr1 = [5, 3, 8, 1];

const filterRangeInPlace = (arr, a, b) => {
    arr1.map((x, i) => {
        if (!(x >= a && x <= b)) {
            arr1.splice(i, 1);
        }
    });
};

filterRangeInPlace(arr1, 1, 4); 

console.log(arr1); // [3, 1]

/////

let array = ["HTML", "JavaScript", "CSS"];
const copySorted = (arr) => {
   return arr.slice().sort();
};
let sorted = copySorted(array);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( array ); // HTML, JavaScript, CSS

class Calculator1 {
    constructor() {
        this.operation = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
        };

        this.calculate = function (str) {
            this.a = +str.split(" ")[0];
            this.b = +str.split(" ")[2];
            this.op = str.split(" ")[1];

            return this.operation[this.op](this.a, this.b);
        };

        this.addMethod = function (op, func) {
            this.operation[op] = func;
        };
    }
}
let calc = new Calculator1 ();
let powerCalc = new Calculator1 ();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 / 3");
console.log( result );

////
/////

function mostAppear(arr){
    const newarr = [...new Set (arr)].sort((a, b) => a - b);
    let result;
    newarr.forEach(value => {
        console.log(arr.filter(x => x == value).length > arr.length / 2);
        if (arr.filter(x => x == value).length > arr.length / 2)
        {result = value;}
    });
    return result;
  }

  console.log(mostAppear([0,1,3,3,3,3,3,1,0]));

////////
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries))

function topSalary () {
    let max = 0;
    let name = null;
    Object.entries(salaries).forEach(([key, value]) => {
        if (max < value) {
            max = value;
            name = key;
        }
    });
    return name;
}

