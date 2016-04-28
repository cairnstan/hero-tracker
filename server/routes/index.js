var express = require('express');
var router = express.Router();

var path = require('path');

router.get('/', function(request, response){
  // response.send('Hello');
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
})

router.post('/hero', function(request, response){
  //for creating heroes
})

router.delete('/', function(){
  //for deleting heroes
})

module.exports = router;
