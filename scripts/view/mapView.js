'use strict';
(function(module){
  mapView = {};

  mapView.renderIndexPage(){

  }

  //Currently this is iterating over all bars (50), we can refactor to choose just the 10 nearest.
    mapView.setMarkers = function() {
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

    mapView.deleteMarkers = function() {

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
