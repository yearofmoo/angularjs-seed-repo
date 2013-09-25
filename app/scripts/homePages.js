angular.module('app.homePages', [])

  .factory('welcomeMessage', function() {
    return function() {
      return 'Welcome Home...';
    };
  })

  .controller('HomeCtrl', function($scope, welcomeMessage) {
    $scope.welcome_message = welcomeMessage();
  });
