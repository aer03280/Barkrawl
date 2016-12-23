'use strict';
(function(module) {
  var aboutController = {};
  aboutController.reveal = function() {
    $('#about-view').show();
    $('#about-tab').addClass('active');
    $('#home-tab').removeClass('active');
    $('#map-view').hide();
    $('#user-form-container').hide();
    $('#bar-view').hide();
  };
  module.aboutController = aboutController;

}) (window);
