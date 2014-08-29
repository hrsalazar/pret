angular.module('pret.controllers', [])

.controller('DashCtrl', function($scope) {
  angular.extend($scope, {
        center: {
            autoDiscover: true,
            lat: 0,
            lng: 0,
            zoom: 0
        },
        defaults: {
            scrollWheelZoom: false
        },
        events: {}
    });

    $scope.markers = {};

    $scope.iconDefault = {
        type: 'awesomeMarker',
        icon: 'star'
    };

    $scope.iconDog = {
        type: 'awesomeMarker',
        icon: 'circle-plus'
    };
    $scope.iconCat = {
        type: 'awesomeMarker',
        icon: 'user'
    };
    $scope.iconBird = {
        type: 'awesomeMarker',
        icon: 'heart'
    };

    $scope.$on("leafletDirectiveMap.click", function(event, args){
      var leafEvent = args.leafletEvent;

      $scope.markers = {m1: {
          lat: leafEvent.latlng.lat,
          lng: leafEvent.latlng.lng,
          message: "My Added Marker",
          draggable: true
      }};
  });
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

  var dataRef = new Firebase("https://foot-pet.firebaseio.com/");
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

.controller('SignupCtrl', function($scope, $rootScope, $firebaseSimpleLogin, $window) {
  $scope.user = {
        email: "",
        password: ""
      };

  $scope.trySignUp = function () {
      var email = this.user.email;
      var password = this.user.password;

      if (!email || !password) {
        $rootScope.notify("Please enter valid credentials");
        return false;
      }

      $rootScope.show('Please wait.. Registering');
      $rootScope.auth.$createUser(email, password, function (error, user) {
        if (!error) {
          $rootScope.hide();
          $rootScope.userEmail = user.email;
          $window.location.href = ('#/dash');
        }
        else {
          $rootScope.hide();
          if (error.code == 'INVALID_EMAIL') {
            $rootScope.notify('Invalid Email Address');
          }
          else if (error.code == 'EMAIL_TAKEN') {
            $rootScope.notify('Email Address already taken');
          }
          else {
            $rootScope.notify('Oops something went wrong. Please try again later');
          }
        }
      });
  };
})

.controller('HomeCtrl', function($scope) {
});
