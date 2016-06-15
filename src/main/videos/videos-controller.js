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