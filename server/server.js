//node modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//dev modules
var index = require('./routes/index');
var hero = require('./routes/heroRouter');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('server/public'));
app.use(bodyParser.json());

//database
var mongoURI = 'mongodb://localhost/hero-tracker';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('Error connecting to MongoDb', err);
})

MongoDB.once('open', function(){
  console.log('MongoDB started');
})

//routers
app.use('/', index);
app.use('/hero', hero);

var server = app.listen(port, function(){
  console.log('Listening on port: ', port);
})
