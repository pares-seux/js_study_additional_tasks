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
  num += '';
  return num.padStart(2, '0')
}

function formatTime(num) {
  if (num === 1 || (num%10 === 1 && num !==11)) {
    return 'а';
  }
  if ((num > 1 && num <5) || (num%10 > 1 && num%10<5 && num > 20)) {
    return 'ы';
  }
   return '';
}

 function formatWords(num) {
   if (+num === 1 || +num === 21) { return '';}
   if (+num >=2 && +num < 5) { return 'а';}
   return 'ов';
 }

setInterval(function() {
  date = new Date();
  longString.textContent ='Сегодня ' + week[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + date.getHours() + ' час' + formatWords(date.getHours()) +' ' + date.getMinutes() + ' минут' + formatTime(date.getMinutes()) + ' ' + date.getSeconds() + ' секунд' + formatTime(date.getSeconds());
  shortString.textContent = formatDate(date.getDate()) + '.' + formatDate(date.getMonth()+1) + '.' + date.getFullYear() + ' - ' + formatDate(date.getHours()) + ':' + formatDate(date.getMinutes()) + ':' +formatDate(date.getSeconds()); 
}, 1000);