angular.module('templates', []);

var haileyKeenModule = angular.module('hkApp', ['ngMaterial', 'ui.router', 'templates']);

haileyKeenModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'home/home.html',
        controller: 'homeCtrl'
      });
}]);
