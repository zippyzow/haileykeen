haileyKeenModule.controller('mainCtrl', function($scope, $state) {

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

  $scope.goToState = function (state) {
    $state.go(state);
  };
});