var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase(text) {
console.log(text.toUpperCase());
}

// printLowerCase(html);

// printLowerCase();

getHTML(requestOptions, printUpperCase);