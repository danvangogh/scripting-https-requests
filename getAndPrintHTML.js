var https = require('https');


function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {
    // console.log(requestOptions);
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


getAndPrintHTMLChunks();