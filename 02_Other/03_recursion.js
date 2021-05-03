"use strict";
//1.1
const sumTo1 = (n) => {
    let sum = 0;
    for (let i = n; i > 0; i--) {
        sum += i;
    }
    console.log(sum);
};
sumTo1(10);
//1.2  --- sumTo(n) = n + sumTo(n-1) for n > 1
const sumTo2 = (n) => {
    if (n == 1) {return 1;}
    return n + sumTo2(n - 1);
};
console.log(sumTo2(10000));
//2 n * (n-1)
const factorial = (n) => {
    if (n == 1) {return 1;}
    return n * factorial(n - 1);
};
console.log(factorial(6));
//3 Fn = Fn-1 + Fn-2
const fib = (n) => {
    if (n <= 1) {return n;}
    else {return fib(n - 1) + fib(n - 2);}
};
console.log(fib(7));
//4
let list = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}};

function showList (list) {
    /*console.log(list.value);
    if (list.next) {
        showList(list.next);
    }
    */
    let tempList = list;
    while(tempList) {
        console.log(tempList.value);
        tempList = tempList.next;
    }
  }
showList(list);
