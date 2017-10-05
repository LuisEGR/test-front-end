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

}]);
