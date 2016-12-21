'use strict';
(function(module){
  var mapView = {};
  mapView.userLocation = '';

  mapView.toHtml = function(){
    var template = Handlebars.compile();
    return template;
  };
  // mapView.renderIndexPage(){
  //
  // }
  //Currently this is iterating over all bars (50), we can refactor to choose just the 10 nearest.
  mapView.setMarkers = function() {
    Bar.allBars.forEach(function(bar){
      var coordinates = {
        lat: bar.latitude,
        lng: bar.longitude,
      };
      // console.log(bar);
      var marker = new google.maps.Marker({
        position: coordinates,
        animation: google.maps.Animation.DROP,
        icon:'/../../img/paw-icon.png',
        map: map.mapObj
      });
      // console.log(marker);
    });
  };

  mapView.deleteMarkers = function() {

  };

  mapView.configQuery = function(val){
    val.split(',').join('');
    val.split(' ').join('');
    return val;
  };
  mapView.setLocation = function(){
    $('#user-submit-btn').on('click', function(){
      // mapView.userLocation = 'PortlandOR';
      Bar.requestData();
      // mapView.userLocation
      var ourLocation = document.getElementById('user-location').value;

      mapView.userLocation = mapView.configQuery(ourLocation);
      console.log('mapView.userLocation',mapView.userLocation);
      if (mapView.userLocation === ''){
        sweetAlert('Sorry, that is not a valid entry');
      } else {
        mapView.setMarkers();
      }
    });
  }


  module.mapView = mapView;
})(window);
