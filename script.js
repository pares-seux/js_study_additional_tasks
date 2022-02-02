"use strict";

const stringForFunction = "     tr122334444444444444444444uetruetruetruetrue";

const printString = function (str) {
  if (typeof str !== "string") {
    return "Алярм: строка не строка!";
  }
  str = str.trim();
  if (str.length > 30) {
    return str.slice(0, 29) + "...";
  }
  return str;
};

console.log(printString(stringForFunction));
