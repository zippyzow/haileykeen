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
    $state.go(state);
  };
  
});