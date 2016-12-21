'use strict';
(function(module) {
  var mapController = {};
  mapController.reveal = function() {
    $('#about-view').hide();
    $('#map-view').show();
  };
  module.mapController = mapController;

}) (window);
