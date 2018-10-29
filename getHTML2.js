



// var { host, path } = requestOptions;
// console.log("host = " + host);

function getHTML (options, callback) {
var https = require('https');
  /* Add your code here */
  https.get(options, function (response) {

    var body = '';

    response.on('data', function (data) {
      body += data;
      callback(body);
  });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
};

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);