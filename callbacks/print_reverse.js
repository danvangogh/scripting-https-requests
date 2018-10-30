var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printReverse(text) {
console.log(text.split('').reverse().join(''));
}

// printLowerCase(html);

// printLowerCase();

getHTML(requestOptions, printReverse);