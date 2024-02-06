// create web server
const express = require('express');
const app = express();

// create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/comments', (req, res) => {
  res.send('Comments page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// or don't