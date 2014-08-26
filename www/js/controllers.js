angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FootprintsCtrl', function($scope, Footprints) {
  $scope.footprints = Footprints.all();
})

.controller('FootprintDetailCtrl', function($scope, $stateParams, Footprints) {
  $scope.footprint = Footprints.get($stateParams.footprintId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('LoginCtrl', function($scope, $firebaseSimpleLogin) {
  $scope.loginData = {};

  var dataRef = new Firebase("https://footpet.firebaseio.com/");
  $scope.loginObj = $firebaseSimpleLogin(dataRef);

  $scope.tryLogin = function() {
    $scope.loginObj.$login('facebook').then(function(user) {
      // The root scope event will trigger and navigate
    }, function(error) {
      // Show a form error here
      console.error('Unable to login', error);
    });
  };
})

.controller('SignupCtrl', function($scope) {
})

.controller('HomeCtrl', function($scope) {
});
