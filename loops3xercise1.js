// Conditional statementts  loops
// temperature check excercise
// number 1

let temperature = 0
 belowzero = -2

if( temperature > belowzero){
console.log("its freezing!");
}

// numb 2
let g = 0
let  n= 15

if(g <= n){
    console.log("its cold");
}

// numb 3
if(16 <= 25){
    console.log("its mild");
}

// numb 4
let  s= 25

if(s >= 25){
    console.log("its warm");
} 

let temp;
let tempNow;
switch(true){
    case temp <= 0:
    tempNow = "its cfreezing";
    break
    case temp >=15:
    tempNow = "its cold";
    break
    case temp  >= 16  <= 25:
    tempNow = "its mild"
    break;
    default:
    case temp >= 25:
    tempNow = "its warm"   
}


// let a = 6
//   a++;
//   console.log(a)

// Exercise 2 Divisibility Check

//  divisible by both
let m = 12

if(m / 2 || e/3){
    console.log("divisible by both");
}

// divisible by 2
let t = 4
if(t / 2){
    console.log("divisible by 2");

}

// divisible by 3
let c = 9
if(c / 3){
    console.log("divisable by 3");
}
// let b = "6"
// if(b * 7 )
// Exercise 2 

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// switch for divisibility

// let num1 = 12

// switch(num1){
//     case num 
// }

switch(true){
    case number % 2 === 0 && number % 3 === 0:
        console.log("divisible by both.");
        break;
    case number % 3 === 0:
        console.log("divisible by 2");
        break;
    case number %3 === 0:
        console.log("divisible by 3");;
        break;
    default:
        console.log("not divisible by 2 or 3")
    }

// even numbers from 1 to 20

for( let i = 1; i <=10; i++){
console.log(i);
}

// evn numbers between 1 and 20

for (let i = 2; i <= 20; i += 2){
    console.log(i);
}

// sum of all numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);

// print each element of the array 
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
    console.log(number);
});

// lagest numb in the array

const Numbers = [3, 7, 2, 5, 10, 6]
let max = Numbers[0];
for (let i = 1; i < numbers.length; i++){
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max);


// print numbers from 1 to 10 
let d = 1;
while (d <= 10) {
    console.log(d); d++
}


// print all even numbers between 1 and 20
let j = 1;
while (j<= 20) {
    if (pj% 2 === 0) {
        console.log(j);
    }
    j++;
}

// sum of all numbers from 1 to 100 
let sum1 = 0;
let k = 1;
while (k <= 100) {
    sum += k;
    k++
}
console.log(sum);

//  multiples of 5 less thean 50

let l = 1;
while (l < 50) {
    if (l % 5 === 0) {
        console.log(l);
    }
    l++;
}

// do while loop


// let text = "";
// let i = 0;

// do{
//     text += i + `<br>`; i++;
// }
//     while (i <5 ) ;
//     console.log(text)


let f = 1;
do {
    console.log(i);
    i++;
}while (i <= 10);

// sum of all numbers from 1 to 100 

let sum2 = 0;
let num3 = 1;
do {
    sum += num3;
    num3++;
} while (num3 <= 100);

console.log(sum);

// prompt the user
let userInput;
do {
    userInput = prompt("plz enter a number greater than 10:");
} while (userInput <= 10);

console.log("valid number:", userInput);


// guessing game 
const correctNumber = Math.floor(Math.random() * 10) + 1;
let userguess;

do {
    userguess = parseInt(prompt("gueess a number between 1 and 10:"));
} while (userguess !== correctNumber);

console.log("congratulations! you guessed a right number.");