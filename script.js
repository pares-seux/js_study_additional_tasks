"use strict";

const arr = ["123", "456", "789", "24680", "13579", "4444", "2222"];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].charAt(0) === "2" || arr[i].charAt(0) === "4") {
    console.log(arr[i]);
  }
}

function searchNumber(num) {
  for (let i = 2; i < Math.round(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function searchLoop(num) {
  console.log(1 + " Делители этого числа: 1 и 1");
  console.log(2 + " Делители этого числа: 1 и 2");
  for (let i = 3; i <= num; i += 2) {
    if (searchNumber(i)) {
      console.log(i + " Делители этого числа: 1 и " + i);
    }
  }
}

searchLoop(100);
