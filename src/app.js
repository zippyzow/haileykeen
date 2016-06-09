angular.module('templates', []);

var haileyKeenModule = angular.module('hkApp', ['ngMaterial', 'ui.router', 'templates']);

haileyKeenModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'home/home.html',
        controller: 'homeCtrl'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'projects/projects.html',
        controller: 'projectsCtrl'
      })
      .state('videos', {
        url: '/videos',
        templateUrl: 'videos/videos.html',
        controller: 'videosCtrl'
      })
      .state('photos', {
        url: '/photos',
        templateUrl: 'photos/photos.html',
        controller: 'photosCtrl'
      });
}]);
