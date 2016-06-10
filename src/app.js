angular.module('templates', []);

var haileyKeenModule = angular.module('hkApp', ['ngMaterial', 'ngAnimate', 'ui.router', 'templates']);

haileyKeenModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'main/projects/projects.html',
        controller: 'projectsCtrl'
      })
      .state('videos', {
        url: '/videos',
        templateUrl: 'main/videos/videos.html',
        controller: 'videosCtrl'
      })
      .state('photos', {
        url: '/photos',
        templateUrl: 'main/photos/photos.html',
        controller: 'photosCtrl'
      });
}]);
