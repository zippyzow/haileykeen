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

haileyKeenModule.controller('mainCtrl', function($scope, $state, $animate) {

  $scope.workSections = [
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

  $scope.goToState = function(state) {
    var hkHome = document.querySelector('hk-home');
    $animate.addClass(hkHome, 'small');
    
    $state.go(state);
  };
});
haileyKeenModule.directive('hkMain', function() {
  return {
    restrict: 'E',
    templateUrl: 'main/main.html',
    controller: 'mainCtrl'
  };
});
haileyKeenModule.controller('homeCtrl', function($scope, $state) {
  
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
});
haileyKeenModule.directive('hkHome', function() {
  return {
    restrict: 'E',
    templateUrl: 'main/home/home.html',
    controller: 'homeCtrl'
  };
});
haileyKeenModule.controller('projectsCtrl', function($scope) {

  $scope.projects = [
    {
      title: 'FILMSTACK',
      image: 'assets/project_pictures/filmstack.png',
      technologies: ['Javascript', 'Angular', 'HTML5', 'CSS3', 'Angular Material', 'Node', 'Express', 'MongoDB'],
      description: 'Allows anyone to discover movies by decade, genre, and/or runtime. It presents three carefully designed selectors that provide an effortless, yet powerful, search experience.',
      githubUrl: 'https://github.com/zippyzow/filmstack',
      deployedUrl: 'http://www.filmstack.xyz/'
    },
    {
      title: 'THE PATH',
      image: 'assets/project_pictures/the-path.png',
      technologies: ['Javascript', 'Angular', 'HTML5', 'CSS3', 'Angular Material', 'Node', 'Express', 'MongoDB'],
      description: 'A game in which players help an adventurer collect gems and reach an escape portal using programming concepts like conditionals, loops and step execution.',
      githubUrl: 'https://github.com/jaikamat/capstone',
      deployedUrl: 'http://thepath.xyz/'
    },
    {
      title: 'PET-E-COAT',
      image: 'assets/project_pictures/pet-e-coat.png',
      technologies: ['Javascript', 'Angular', 'Bootstrap', 'HTML5', 'CSS3', 'Angular Material', 'Node', 'Express', 'MongoDB'],
      description: 'An e-commerce application that specializes in matching outfits for owners and their pets.',
      githubUrl: 'https://github.com/jeremybini/quokka',
      deployedUrl: 'https://glacial-tundra-86660.herokuapp.com/'
    }
  ];
});
haileyKeenModule.directive('hkProjects', function() {
  return {
    restrict: 'E',
    templateUrl: 'main/projects/projects.html',
    controller: 'projectsCtrl'
  };
});