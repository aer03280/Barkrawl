'use strict';
(function(module){
  var barController = {};
  barController.reveal = function(ctx, next){
    // ctx.params.id // you want this to be your barID;
    $('#about-view').hide();
    $('#map-view').hide();
    $('#bar-view').show();

    Bar.allBars;

    webDB.execute(
    'SELECT * FROM bars_database WHERE id=' + ctx.params.id,
      function(result){
        console.log(arguments);
        var selectedBar = result[0];
        console.log('Found the Bar.', selectedBar);
        var source   = $('#bar-template').html();
        var template = Handlebars.compile(source);
        var html = template(selectedBar);
        console.log('html',html);
        $('#bar-view').html(html);
      }
  );
  };


  //   console.log('Bar.allBars:', allBars);
  //   next();
  // };

  module.barController = barController;
})(window);
