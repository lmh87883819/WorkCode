var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

app.get('/',function(req,res){
  res.send('hello')
})
app.post('/upload', function (req, res) {
  // res.send(req.body);
  console.log(req.body);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});