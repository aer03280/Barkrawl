'use strict';
(function(module){
  mapView = {};

  mapView.toHtml(){
    var template = Handlebars.compile();
    return template;
  }
  mapView.renderIndexPage(){

  }

  $('#user-submit-btn').on('click', function(){
    var userLocation = document.getElementById('#user-location').value;
    if (userLocation === ''){
      alert('Sorry, try inputing another value');
    } else {

    }
  });















  module.mapView = mapView;
})(window);
