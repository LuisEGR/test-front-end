angular.module("VendePropiedades", [])

.service('Contactos', ['$http', function($http){
  this.getAll = function(){
      return $http.get('http://demo6292426.mockable.io/blickTest')
  }
}])

.controller('VPController', ['$scope', 'Contactos', function($scope, Contactos){
  $scope.test = "test";
  $scope.dataContactos = {};


  $scope.showContactos = function(){
    Contactos.getAll().then((contactos) => {
      console.log(contactos.data);
      alert(JSON.stringify(contactos.data, null, 4))
    })
  }

/*
Caracteres unicos
*/
  var hasUniqueCharacters = function(s){
      var r = {}, i, x;
      for (i=0; i<s.length; i++) {
        x = s[i];
        if (r[x])
          return false;
        r[x] = true;
      }
      return true;
  }

  function primeFactors(n){
    var i = 2;
    var res = [];
    var p =0;
    while(n > 1){
      if(n % i === 0){
        res.push(i);
        n /= i;
        i = 2;
      } else {
        i++;
      }
    }
    return res;
  }


  console.log("Factores Primos:");
  console.log(20, primeFactors(20));
  console.log(330, primeFactors(330));

  console.log("Caractéres únicos:");
  console.log("hola", hasUniqueCharacters("hola"));//true
  console.log("holaa", hasUniqueCharacters("holaa"));//false

}]);
