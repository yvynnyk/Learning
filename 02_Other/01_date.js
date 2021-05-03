"use strict";
//1
console.log(new Date (2012, 1, 20, 3, 12));
//2
const getWeekDay = (date) => {
    const week = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return week[date.getDay()];
};

let date = new Date(2012, 0, 3);  
console.log(getWeekDay(date));        
//3
let date1 = new Date(2012, 0, 3);
const getLocalDay = (date) => date.getDay() == 0 ? 7 : date.getDay();
console.log(getLocalDay(date1));
//4
let date2 = new Date(2021, 0, 2);

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
console.log( getDateAgo(date2, 1) );
console.log( getDateAgo(date2, 2) );
console.log( getDateAgo(date2, 365) );
//5
getLastDayOfMonth(2012, 1); // 29

function getLastDayOfMonth (year, month) {
    const date = new Date (year, month + 1, 0);
    console.log(date.getDate());    
}
//6
getSecondsToday(); // (3600 * 10)
function getSecondsToday () {
    const now = new Date();
    console.log(now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds());
}
//7
getSecondsToTomorrow();

function getSecondsToTomorrow () {
    const now = new Date ();
    const tomorrow = new Date (now.getFullYear(), now.getMonth(), now.getDate() + 1);
    console.log((tomorrow - now) / 1000);
}



























