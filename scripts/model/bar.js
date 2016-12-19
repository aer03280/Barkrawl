'use strict';
(function (module) {
  var bar = {};

  bar.allBars = [];

  function Bar(opts){
    opts.forEach(function(element, index, array){
      this[keys] = element[keys];
    },this);
  }

  Bar.requestData = function(){
    
  };

  module.bar = bar;
})(window);
