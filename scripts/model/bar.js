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
      url: '/yelp/v3/businesses/search?categories=bars&term=dogs%20allowed&location=seattle',
      success: function(data) {
        Bar.allBars = data;
        console.table(Bar.allBars);

      }
    });
  };
  module.Bar = Bar;
})(window);
