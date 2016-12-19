'use strict';
(function (module) {
  var Bar = {};

  Bar.allBars = [];

//I have a feeling we need to refactor this still -nikko
  function Business(opts){
    opts.forEach(function(element){
      this[keys] = element[keys];
    },this);
  }

  Bar.requestData = function(){
    $.ajax({
      type: 'GET',
      url: 'https://api.yelp.com/v3/businesses/search?categories=bars&term=dogs%20allowed&location=seattle',
      headers: {'Authorization': 'Bearer _7x37AIhk_hdml_p5LSrM_u3-O6wZnfHzwa6ZjykVSX-chGpwTNMqcBumtMCqqzOmyTmokrffDFiiqpmLCikz3c_eU3MjEM5E-I010wgsdbPZEiOMDr5Z7KbJEhUWHYx'},
      success: function(data) {
        Bar.allBars = data;
        console.table(Bar.allBars);

      }
    });
  };
  module.Bar = Bar;
})(window);
