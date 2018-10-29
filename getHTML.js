var https = require('https');


  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

// var { host, path } = requestOptions;
// console.log("host = " + host);


function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, function (response) {

    var body = '';
    response.on('data', function (data) {
      body += data;
      console.log(body);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

};


getAndPrintHTML(requestOptions);