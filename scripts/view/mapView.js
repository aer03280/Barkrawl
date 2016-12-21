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
      var marker = new google.maps.Marker({
        position: coordinates,
        animation: google.maps.Animation.DROP,
        icon:'/../../img/paw-icon.png',
        map: map.mapObj
      });
    });
  };

  mapView.deleteMarkers = function() {

  };

  var configQuery = function(val){
    var newVal1 = val.split(' ').join('');
    var newVal2 = newVal1.split(',').join('');
    return newVal2;
  };

  mapView.setLocation = function(){
    $('#user-submit-btn').on('click', function(){
      Bar.requestData();
      var inputLocation = document.getElementById('user-location').value;
      mapView.userLocation = configQuery(inputLocation);
      if (mapView.userLocation === ''){
        sweetAlert('Sorry, that is not a valid entry');
      } else {
        mapView.setMarkers();
      }
    });
  };

  module.mapView = mapView;
})(window);
