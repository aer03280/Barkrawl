'use strict';
(function(module){
  var barController = {};
  barController.reveal = function(ctx, next){
    // ctx.params.id // you want this to be your barID;
    $('#about-view').hide();
    $('#bar-view').show();
    $('#map-view').hide();
    // Bar.allBars
    // Bar.requestData(function(allBars){
    //   console.log('Booya! Allbars!', allBars);
      var selectedBar;
      // sql query here
      weDB execute
      // for (var i = 0; i < allBars.length; i++) {
      //   if (allBars[i].barID == ctx.params.id) {
      //     selectedBar = allBars[i];
      //   }
      // }
      console.log('Found the Bar.', selectedBar);
      var source   = $('#bar-template').html();
      var template = Handlebars.compile(source);
      var html = template(selectedBar);
      $('#bar-view').html(html);
    });
    console.log('Bar.allBars:', allBars);
    next();
  };

  module.barController = barController;
}) (window);
