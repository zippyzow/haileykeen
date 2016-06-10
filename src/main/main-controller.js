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