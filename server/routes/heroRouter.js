var express = require('express');
var router = express.Router();
var Hero = require('../../models/hero');

router.post('/', function(request, response){
  Hero.create(request.body, function(err){
    if(err){
      console.log('Error saving question', err);
      response.sendStatus(500);
    } else{
      response.sendStatus(200);
    }
  })

})


module.exports = router
