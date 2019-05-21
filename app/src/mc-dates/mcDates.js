// Load the custom app ES6 modules

import DatePicker from 'src/mc-dates/components/DatePicker/DatePicker';

// Define the AngularJS 'mc-dates' module

export default angular
  .module("mcDates", ['ngMaterial'])

  .component(DatePicker.name, DatePicker.config)