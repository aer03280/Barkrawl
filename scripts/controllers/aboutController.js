'use strict';
(function(module) {
  var aboutController = {};
  aboutController.reveal = function() {
    $('#about-view').show();
    $('#about-tab').addClass('active');
    $('#home-tab').removeClass('active');
    $('#map-view').hide();
    $('#user-form-container').hide();
    console.log('This is a meaningful message');
  };
  module.aboutController = aboutController;

}) (window);
