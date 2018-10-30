

module.exports = function getHTML (options, callback) {
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


// getHTML(requestOptions, printHTML);
