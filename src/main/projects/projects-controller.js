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