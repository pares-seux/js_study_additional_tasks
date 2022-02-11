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

 function formatWords(num, array) {
   if (num === 1 || (num%10 === 1 && num !==11)) { return array[0];}
   if ((num > 1 && num <5) || (num%10 > 1 && num%10<5 && num > 20)) { return array[1];}
   return array[2];
 }

setInterval(function() {
  date = new Date();
  longString.textContent ='Сегодня ' + week[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + date.getHours() + formatWords(date.getHours(), [' час',' часа',' часов']) +' ' + date.getMinutes() + formatWords(date.getMinutes(), [' минута',' минуты',' минут']) + ' ' + date.getSeconds() + formatWords(date.getSeconds(), [' секунда',' секунды',' секунд']);
  shortString.textContent = formatDate(date.getDate()) + '.' + formatDate(date.getMonth()+1) + '.' + date.getFullYear() + ' - ' + formatDate(date.getHours()) + ':' + formatDate(date.getMinutes()) + ':' +formatDate(date.getSeconds()); 
}, 1000);