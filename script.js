"use strict";

const week = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];

let date = new Date();


for (let day in week) {
  let styleRule = '';
  if ( +day === 0 || +day === 6 ) {
    styleRule += 'font-style: italic; ';
  }
  if ( +day === date.getDay()) {
    styleRule += 'font-weight: 800; '
  }
  console.log('%c%s', styleRule, week[day]);
}
