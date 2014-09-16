var express = require('express'),
    http    = require('http'),
    fs      = require('fs');

var app = express();

app.use(express.static('dist'));

app.get('*', function(req, res){
  console.log(req.url);
  res.set('Content-Type', 'text/html');
  res.send(fs.readFileSync('dist/index.html'));
});

var server = http.createServer(app).listen(8888, function(err){
  console.log('listening');
});