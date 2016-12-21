'use strict';
(function(module){

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
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

//Left this in a semi-working condition. Currently no markers are being generated. We were attempting to iterate over the Bar.allBars array and instantiate a specific marker for each one. **Note** We've currently set up the Lat/Lng values in reverse order like Crystal had mentioned.
  Bar.allBars.forEach(function(bar) {
    new google.maps.Marker({
      position: {lat: bar.longitude, lng: bar.latitude},
      map: map,
      title: bar.name
    });
  });
})(window);
