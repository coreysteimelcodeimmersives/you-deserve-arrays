const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let arrayLength = userArray.length;

let isTrue = true;

let isFalse = false;

if (arrayLength >= 10){
    console.log(isTrue);
} else {
    console.log(isFalse);
}