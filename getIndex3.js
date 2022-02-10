const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let arrayLength = userArray.length;

if (arrayLength < 4) {
    console.log(userArray[arrayLength-1]);
} else {
    console.log(userArray[3]);
}