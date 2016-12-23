'use strict';
(function(module) {
  var aboutController = {};
  aboutController.reveal = function() {
    $('#about-view').show();
    $('#map-view').hide();
    $('#user-form-container').hide();
    $('#bar-view').hide();
    console.log('This is a meaningful message');
  };
  module.aboutController = aboutController;

}) (window);
