var app = angular.module("heroApp", []);

app.controller('createController', ['$http', function($http){
  var create = this;
  create.data = {};
  create.heroList = [];
  create.hero = '';
  create.powers = [
    {name: 'Invisibility'},
     {name: 'Flight'},
     {name: 'Super Speed'},
     {name: 'Heat Vision'},
     {name: 'Super Strength'},
     {name: 'Accelerated Healing'},
     {name: 'Power Blast'},
     {name: 'Animal Affinity'}
   ]
  var fetchHeroes = function(){
    $http.get('/hero').then(function(response){
      console.log('This is the response from hero', response);
      if(response.status !== 200){
      console.log('Failed to get list from API!');
    }
    create.heroList = response.data;
    return response.data;
  })
}

  create.makeHero = function(){
    console.log('hero button clicked');
    console.log(create.data);
    $http.post('/hero', create.data).then(function(response){
      fetchHeroes();
      console.log('hero created', response);
  })
  }
}])

app.controller('displayController', ['$http', function($http){

}])
