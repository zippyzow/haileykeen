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

haileyKeenModule.controller('homeCtrl', function($scope) {
  $scope.icons = [
    {
      url: 'https://github.com/zippyzow',
      image: 'assets/social_icons/grey_icons/github_icon.png'
    },
    {
      url: 'https://www.linkedin.com/in/haileyckeen',
      image: 'assets/social_icons/grey_icons/linkedin_icon.png'
    },
    {
      url: 'http://haileyckeen.tumblr.com/',
      image: 'assets/social_icons/grey_icons/tumblr_icon.png'
    },
    {
      url: 'https://www.youtube.com/channel/UCmULIRdzacp6-WS6AekgvJQ',
      image: 'assets/social_icons/grey_icons/youtube_icon.png'
    },
    {
      url: 'https://www.instagram.com/zippyzow/?hl=en',
      image: 'assets/social_icons/grey_icons/instagram_icon.png'
    }
  ];

  $scope.work = [
    {
      title: 'VIDEOS',
      state: 'videos'
    },
    {
      title: 'PROJECTS',
      state: 'projects'
    },
    {
      title: 'PHOTOS',
      state: 'photos'
    }
  ];

  $scope.navbar = [
    {
      title: 'ABOUT'
    },
    {
      title: 'RESUME'
    },
    {
      title: 'CONTACT'
    }
  ];
  
});
haileyKeenModule.directive('hkHome', function() {
  return {
    restrict: 'E',
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  };
});
