var express = require('express');
var bodyParser =require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.set('view engine', 'ejs');

app.get('/'  , function(req,res){
  res.render('form')
});

app.get('/form'  , function(req,res){
  res.render('form')
});



app.post('/letter' ,  urlencodedParser,function(req,res){

  res.render('letter', {data: req.body});
});

app.listen(9000);
