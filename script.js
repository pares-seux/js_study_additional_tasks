"use strict";

let lang = "ru";
let week = new Map([
  [
    "ru",
    [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ],
  ],
  [
    "en",
    [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  ],
]);
console.log("#1");
if (lang === "ru") {
  console.log(week.get(lang).toString());
} else if (lang === "en") {
  console.log(week.get(lang) + "");
} else {
  console.log("Мы такого языка не знаем");
}
console.log("#1");
switch (lang) {
  case "ru":
    console.log(week.get(lang) + "");
    break;
  case "en":
    console.log(week.get(lang).toString());
    break;
  default:
    console.log("Мы такого языка не знаем");
}
console.log("#3");
console.log(week.get(lang) + "");

console.log("_______________________________________");

let namePerson = "Кирилл";

namePerson === "Артем"
  ? console.log("Директор")
  : namePerson === "Александр"
  ? console.log("преподаватель")
  : namePerson === "Кирилл"
  ? console.log("лучший куратор")
  : console.log("студент");
