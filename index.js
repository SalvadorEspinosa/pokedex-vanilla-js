var express = require('express');

var app = express();

app.use(express.static('website'))

app.listen(8081, function () {

  console.log('Simple Web Application running on port 8081!');

});