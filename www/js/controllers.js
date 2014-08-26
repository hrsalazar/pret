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
});
