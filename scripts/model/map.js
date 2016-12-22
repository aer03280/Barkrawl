'use strict';
(function(module){
  var map = {};

  map.mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(47.6062, -122.3321),
    mapTypeId: google.maps.MapTypeId.STREET,
    scrollwheel: false,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    }
  };

  var myLatLng = {lat: 47.7051, lng: -122.3509};
  var mapDiv = document.getElementById('map');
  map.mapObj = new google.maps.Map(mapDiv, map.mapOptions);

  google.maps.event.addDomListener(window, 'load', function() {
    var input = document.getElementById('user-location');
    map.autocomplete = new google.maps.places.Autocomplete(input);
  });

  module.map = map;
})(window);
