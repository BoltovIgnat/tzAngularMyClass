// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';


import AppController from 'src/AppController';
import mcDates from 'src/mc-dates/mcDates';

export default angular.module( 'starter-app', [ 'ngMaterial', mcDates.name ] )
  .config(($mdIconProvider, $mdThemingProvider) => {

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('blue');
  })
  .controller('AppController', AppController);
