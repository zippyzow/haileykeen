angular.module('templates', []);

var haileyKeenModule = angular.module('hkApp', ['ngMaterial', 'ngAnimate', 'templates']);

haileyKeenModule.controller('mainCtrl', function($scope) {

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
});
haileyKeenModule.directive('hkMain', function() {
  return {
    restrict: 'E',
    templateUrl: 'main/main.html',
    controller: 'mainCtrl'
  };
});
haileyKeenModule.controller('homeCtrl', function($scope) {
  
  $scope.icons = [
    {
      url: 'https://github.com/zippyzow',
      image: 'assets/icons/thick/github-white.png'
    },
    {
      url: 'https://www.linkedin.com/in/haileyckeen',
      image: 'assets/icons/thick/linkedin-white.png'
    },
    {
      url: 'http://haileyckeen.tumblr.com/',
      image: 'assets/icons/thick/tumblr-white.png'
    },
    {
      url: 'https://www.youtube.com/channel/UCmULIRdzacp6-WS6AekgvJQ',
      image: 'assets/icons/thick/youtube-white.png'
    },
    {
      url: 'https://www.instagram.com/zippyzow/?hl=en',
      image: 'assets/icons/thick/instagram-white.png'
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
      image: 'assets/project_pictures/filmstack-small.png',
      technologies: ['Javascript', 'Angular', 'HTML5', 'CSS3', 'Angular Material', 'Node', 'Express', 'MongoDB'],
      description: 'Allows anyone to discover movies by decade, genre, and/or runtime. It presents three carefully designed selectors that provide an effortless, yet powerful, search experience.',
      githubUrl: 'https://github.com/zippyzow/filmstack',
      deployedUrl: 'http://www.filmstack.xyz/'
    },
    {
      title: 'THE PATH',
      image: 'assets/project_pictures/the-path-small.png',
      technologies: ['Javascript', 'Angular', 'HTML5', 'CSS3', 'Angular Material', 'Node', 'Express', 'MongoDB'],
      description: 'A game in which players help an adventurer collect gems and reach an escape portal using programming concepts like conditionals, loops and step execution.',
      githubUrl: 'https://github.com/jaikamat/capstone',
      deployedUrl: 'http://thepath.xyz/'
    },
    {
      title: 'PET-E-COAT',
      image: 'assets/project_pictures/pet-e-coat-small.png',
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
haileyKeenModule.controller('videosCtrl', function($scope, $sce) {

  $scope.videos = [
    {
      title: 'WATERFALLS',
      embedUrl: $sce.trustAsResourceUrl('https://www.youtube.com/embed/_henIN18dz0'),
      technologies: ['Final Cut Pro X', 'Photoshop', 'DJI Phantom 2', 'GoPro'],
      description: 'Top 10 waterfalls of Iceland'
    },
    {
      title: 'ICEBERGS',
      embedUrl: $sce.trustAsResourceUrl('https://www.youtube.com/embed/jJA8gIoxEuY'),
      technologies: ['Final Cut Pro X', 'DJI Phantom 2', 'GoPro'],
      description: 'Iceland Jökulsárlón Icebergs'
    },
    {
      title: 'QUADCOPTER',
      embedUrl: $sce.trustAsResourceUrl('https://www.youtube.com/embed/DMx_kbl3CBg'),
      technologies: ['Final Cut Pro X', 'Parrot AR Drone 2.0', 'DSLR'],
      description: 'Parrot AR Drone 2.0 Rooftop and Indoor Flight'
    }
  ];
});
haileyKeenModule.directive('hkVideos', function() {
  return {
    restrict: 'E',
    templateUrl: 'main/videos/videos.html',
    controller: 'videosCtrl'
  };
});