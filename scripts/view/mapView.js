'use strict';
(function(module){
  var mapView = {};
  mapView.markers = [];
  mapView.userLocation = '';

  //to prevent our user from 'submitting' and refreshing the page.
  // window.addListener('onload', function(event){
  //   event.preventDefault();
  //   $('#user-location').preventDefault();
  // });

  mapView.toHtml = function(){
    var template = Handlebars.compile();
    return template;
  };

  mapView.centerMap = function() {
    var barLat = Bar.allBars[0].latitude;
    var barLng = Bar.allBars[0].longitude;
    var newCenter = {lat: barLat, lng: barLng};
    map.mapObj.panTo(newCenter);
  };

  mapView.setMarkers = function() {
    mapView.markers = [];
    // get all the bar from webDB
    // loop over bars
    // add marker to map
    // app events to markes
    webDB.execute(
    'SELECT * FROM bars_database',
    function(result){
      result.forEach(function(bar){
        var coordinates = {
          lat: bar.latitude,
          lng: bar.longitude,
        };
        var marker = new google.maps.Marker({
          position: coordinates,
          animation: google.maps.Animation.DROP,
          icon:'/../../Img/paw-icon.png',
          map: map.mapObj,
          id: bar.id
        });
        mapView.markers.push(marker);
        marker.addListener('click', function() {
          mapView.userChoice = new google.maps.LatLng(bar.latitude, bar.longitude);
          mapView.selectedMarker = this;
          console.log('the bar is bar', bar);
          page('/bar/' + bar.id);
        });

      });

    });
    mapView.centerMap();
  };

  mapView.deleteOldMarkers = function() {
    mapView.markers.forEach(function(marker) {
      marker.setMap(null);
    });
  };

  var configQuery = function(val){
    var newVal1 = val.split(' ').join('');
    var newVal2 = newVal1.split(',').join('');
    return newVal2;
  };

  mapView.setLocation = function(){
    $('#user-submit-btn').on('click', function(){
      var inputLocation = document.getElementById('user-location').value;
      mapView.userLocation = configQuery(inputLocation);
      if (mapView.userLocation === ''){
        sweetAlert('Not to be ruff, but you should enter at least something.');
      } else {
        Bar.requestData(Bar.insertRecord);
      }
    });
  };

  module.mapView = mapView;
})(window);

// Bar.allBars.forEach(function(bar){
//   var coordinates = {
//     lat: bar.latitude,
//     lng: bar.longitude,
//   };
//   var marker = new google.maps.Marker({
//     position: coordinates,
//     animation: google.maps.Animation.DROP,
//     icon:'/../../img/paw-icon.png',
//     map: map.mapObj,
//     id: bar.barID
//   });
//   mapView.markers.push(marker);
//   marker.addListener('click', function() {
//     mapView.userChoice = new google.maps.LatLng(bar.latitude, bar.longitude);
//     mapView.selectedMarker = this;
//     console.log('the bar is bar', bar);
//     page('/bar/' + bar.id);
//   });
