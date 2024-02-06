// create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var comments = require('./comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the server to serve static files
app.use(express.static('public'));

// get request to /comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// post request to /comments
app.post('/comments', function(req, res) {
  comments.push(req.body);
  fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(comments);
});

// listen on port 3000
app.listen(3000, function() {
  console.log('Server started on port 3000');
});