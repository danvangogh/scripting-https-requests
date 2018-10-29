var https = require('https');


function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */

  https.get(requestOptions, function (response) {
    // console.log(requestOptions);
    response.setEncoding('utf8');
    response.on('data', function (data) {
      console.log('Chunk Received:', data);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

};


getAndPrintHTMLChunks();