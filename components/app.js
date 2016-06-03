var haileyKeenModule = angular.module('hkApp', ['ngMaterial', 'ui.router']);

haileyKeenModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'components/home/home.html',
        controller: 'homeCtrl'
      });
}]);
