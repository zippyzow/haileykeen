haileyKeenModule.controller('projectsCtrl', function($scope) {

  $scope.projects = [
    {
      title: 'FILMSTACK',
      image: 'assets/project_pictures/filmstack.png',
      description: 'Allows anyone to discover movies by decade, genre, and/or runtime. It presents three carefully designed selectors that provide an effortless, yet powerful, search experience.',
      technologies: 'MEAN Stack, Material Angular'
    }
  ];
});