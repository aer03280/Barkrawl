'use strict';
(function (module) {
  var bar = {};

  bar.allBars = [];

  function Bar(opts){
    opts.forEach(function(element, index, array){
      this[keys] = element[keys];
      bar.allBars.push(this);
      console.table(bar.allBars);
    },this);
  }

  Bar.requestData = function(){
    
  };

  module.bar = bar;
})(window);
