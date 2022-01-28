let num = 266219;
let multy = 1;

// version1
while (num) {
    let temp = num % 10;
    multy *= temp;
    num = (num - temp) / 10;
}
console.log(multy);

//version2
num = 266219;
multy = 1;
num.toString().split('').forEach( element => { 
   multy *= element;  
});

console.log((multy ** 3).toString().slice(0,2));



