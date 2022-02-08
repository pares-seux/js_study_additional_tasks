"use strict";

const longString = document.querySelector('.date--long');
const shortString = document.querySelector('.date--short');
const week = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
const month = ['Января' , 'Февраля' , 'Марта' , 'Апреля' , 'Мая' , 'Июня' , 'Июля' , 'Августа' , 'Сентября' , 'Октября' , 'Ноября' , 'Декабря'];

let date;

function formatDate(num) {
  if (+num < 10) {
    return '0' + num;
  }
  return num
}

function formatTime(num) {
  switch(num) {
    case 1: 
    case 21: 
    case 31:
    case 41: 
    case 51: return 'а';
    case 2:
    case 3:
    case 4: 
    case 22:
    case 23:
    case 24:
    case 32:
    case 33: 
    case 34:
    case 42:
    case 43:
    case 44: 
    case 52:
    case 53:
    case 54: return 'ы';
    default: return '';
  };
}

 function formatHours(num) {
   if (+num === 1 || +num === 21) { return '';}
   if (+num >=2 && +num < 5) { return 'а';}
   return 'ов';
 }

setInterval(function() {
  date = new Date();
  longString.textContent ='Сегодня ' + week[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + date.getHours() + ' час' + formatHours(date.getHours()) +' ' + date.getMinutes() + ' минут' + formatTime(date.getMinutes()) + ' ' + date.getSeconds() + ' секунд' + formatTime(date.getSeconds());
  shortString.textContent = formatDate(date.getDate()) + '.' + formatDate(date.getMonth()+1) + '.' + date.getFullYear() + ' - ' + formatDate(date.getHours()) + ':' + formatDate(date.getMinutes()) + ':' +formatDate(date.getSeconds()); 
}, 1000);