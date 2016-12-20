'use strict';
(function (module) {
  var Bar = {};

  Bar.allBars = [];

//I have a feeling we need to refactor this still -nikko
  function Business(opts){
    Object.keys(opts).forEach(function(element,index){
      // this[element] = opts[element];
      this.name = opts[index].name;
      this.latitude =  opts[index].coordinates.latitude;
      this.longitude = opts[index].coordinates.longitude;
      this.address = opts[index].location.display_address;
      this.phone = opts[index].display_phone;
      this.image = opts[index].image_url;
      this.price = opts[index].price;
      this.rating = opts[index].rating;
      this.currentlyOpen = opts[index].is_closed;
    },this);
  }

  Bar.requestData = function(){
    $.ajax({
      type: 'GET',
      url: '/yelp/v3/businesses/search?categories=bars&term=dogs%20allowed&location=98103&limit=50&sort_by=distance',
      success: function(data) {
        data.businesses.forEach(function(bar){
          var current_bar = new Business(bar);
          Bar.allBars.push(current_bar);

        });
        console.table(Bar.allBars);

      }
    });
  };
  module.Bar = Bar;
})(window);
