var haileyKeenModule = angular.module('hkApp', ['ngMaterial']);
haileyKeenModule.controller('homeCtrl', function($scope) {
  $scope.icons = [
    {
      url: 'https://github.com/zippyzow',
      image: 'assets/social_icons/grey_icons/github_icon.png'
    },
    {
      url: 'https://github.com/zippyzow',
      image: 'assets/social_icons/grey_icons/linkedin_icon.png'
    },
    {
      url: 'https://github.com/zippyzow',
      image: 'assets/social_icons/grey_icons/youtube_icon.png'
    },
    {
      url: 'https://github.com/zippyzow',
      image: 'assets/social_icons/grey_icons/tumblr_icon.png'
    },
    {
      url: 'https://github.com/zippyzow',
      image: 'assets/social_icons/grey_icons/instagram_icon.png'
    }
  ];

  $scope.work = [
    {
      title: 'PROJECTS'
    },
    {
      title: 'VIDEOS'
    },
    {
      title: 'PHOTOS'
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
    templateUrl: 'components/home/home.html',
    controller: 'homeCtrl'
  };
});