const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let firstItem = typeof userArray[0];

let isNum = typeof 9;

let isTrue = true;

let isFalse = false;

if (firstItem === isNum) {
    console.log(isTrue);
} else {
    console.log(isFalse);
}