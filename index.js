const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/main.js', function(req, res) {
  res.sendFile(__dirname + '/main.js');
});

const server = app.listen(3000, function() {
  console.log('Server running at http://localhost:' + server.address().port);
});