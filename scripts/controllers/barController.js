'use strict';
(function(module){
  var barController = {};
  barController.reveal = function(ctx, next){
    $('#about-view').hide();
    $('#map-view').hide();
    $('#user-form-container').hide();
    $('#bar-view').show();

    webDB.execute(
    'SELECT * FROM bars_database WHERE id=' + ctx.params.id,
      function(result){
        var selectedBar = result[0];
        var source   = $('#bar-template').html();
        var template = Handlebars.compile(source);
        var html = template(selectedBar);
        $('#bar-view').html(html);
      }
  );
  };
  module.barController = barController;
})(window);
