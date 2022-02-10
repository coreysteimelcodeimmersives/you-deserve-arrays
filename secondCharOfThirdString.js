const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let thirdItem = userArray[2];

let thirdItemType = typeof thirdItem;

let secondChar = thirdItem[1];

let isString = typeof "string";

if (thirdItemType === isString) {
    console.log(secondChar);
} else {
    console.log("error");
}