var html = "Yay, now your function is nested happily in its own little module, and as such, it is completely modular. You could require this module in all sorts of files, and tell it to do all sorts of crazy wild unimaginable things.";

function printUpperCase(text) {
console.log(text.toUpperCase());
}

// printLowerCase(html);

function printLowerCase(text) {
console.log(text.toLowerCase());
}

printLowerCase(html);

function printReverse(text) {
console.log(text.split('').reverse().join(''));
}

printReverse(html);