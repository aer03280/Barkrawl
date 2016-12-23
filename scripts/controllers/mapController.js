'use strict';
(function(module) {
  var mapController = {};
  mapController.reveal = function() {
    $('#map-view').show();
    $('#user-form-container').show();
    $('#about-view').hide();
    $('#bar-view').hide();
    $('#home-tab').addClass('active');
    $('#about-tab').removeClass('active');
  };
  module.mapController = mapController;

}) (window);
