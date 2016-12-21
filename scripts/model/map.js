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

//Left this in a semi-working condition. Currently no markers are being generated. We were attempting to iterate over the Bar.allBars array and instantiate a specific marker for each one. **Note** We've currently set up the Lat/Lng values in reverse order like Crystal had mentioned.
  // Bar.allBars.forEach(function(bar) {
  //   new google.maps.Marker({
  //     position: {lat: bar.longitude, lng: bar.latitude},
  //     map: map,
  //     title: bar.name
  //   });
  // });

  //Currently our call-order isn't operating properly, we can use this code later to iterate over whichever array and create markers (perhaps a currentBars array?) If setMarkers is called *after* our callstack is completed, it will render the markers properly.
  map.setMarkers = function() {
    Bar.allBars.forEach(function(bar){
      var coordinates = {
        lat: bar.latitude,
        lng: bar.longitude,
      };
      console.log(bar);
      var marker = new google.maps.Marker({
        position: coordinates,
        animation: google.maps.Animation.DROP,
        icon:'/../../img/paw-icon.png',
        map: mapObj
      });
      console.log(marker);
    });
  };
  module.map = map;
})(window);
