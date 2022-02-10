const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let arrayLength = userArray.length;

console.log(userArray[arrayLength-1]);