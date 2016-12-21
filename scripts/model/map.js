'use strict';
(function(module){
  var map = {};

  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(47.705, -122.350),
    mapTypeId: google.maps.MapTypeId.STREET,
    scrollwheel: false,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    }
  };

  var myLatLng = {lat: 47.7051, lng: -122.3509};
  var mapDiv = document.getElementById('map');
  var mapObj = new google.maps.Map(mapDiv, mapOptions);

  //This function will autocomplete any input the user makes.
  //We can use this once our form is completed.

  // google.maps.event.addDomListener(window, 'load', function() {
  //   var input = document.getElementById(['*form-id*']);
  //   map.autocomplete = new google.maps.places.Autocomplete(input);
  // });

  module.map = map;
})(window);
