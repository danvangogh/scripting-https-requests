var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowerCase(text) {
console.log(text.toLowerCase());
}

// printLowerCase(html);

// printLowerCase();

getHTML(requestOptions, printLowerCase);