'use strict';
(function(module) {
  var mapController = {};
  mapController.reveal = function() {
    $('#about-view').hide();
    $('#bar-view').hide();
    $('#map-view').show();
    $('#user-form-container').show();
  };
  module.mapController = mapController;

}) (window);
