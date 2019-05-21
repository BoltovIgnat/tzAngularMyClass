// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
  name : 'datepicker',
  config : {
    bindings         : {  users: '<', selected : '<', showDetails : '&onSelected' },
    templateUrl      : 'src/mc-dates/components/datepicker/datepicker.html'
  }
};
