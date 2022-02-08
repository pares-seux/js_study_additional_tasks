"use strict";

const longString = document.querySelector('.date--long');
const shortString = document.querySelector('.date--short');

let date;

function formatDate(num) {
  if (+num < 10) {
    return '0' + num;
  }
  return num
}



setInterval(function() {
  date = new Date();
  console.log(date);
  shortString.textContent = formatDate(date.getDate()) + '.' + formatDate(date.getMonth()) + '.' + date.getFullYear() + ' - ' + formatDate(date.getHours()) + ':' + formatDate(date.getMinutes()) + ':' +formatDate(date.getSeconds()); 
}, 1000);