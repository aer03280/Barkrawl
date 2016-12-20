'use strict';
(function (module) {
  var Bar = {};

  Bar.allBars = [];

  function RenderBusinesses(opts){
    this.name = opts.name;
    console.log(this.name);
    this.latitude =  opts.coordinates.latitude;
    this.longitude = opts.coordinates.longitude;
    // note: address is an array of 3 items
    this.address = opts.location.display_address;
    this.phone = opts.display_phone;
    this.image = opts.image_url;
    this.price = opts.price;
    this.rating = opts.rating;
    this.currentlyOpen = opts.is_closed;
    Bar.allBars.push(this);
  }

  Bar.requestData = function(){
    $.ajax({
      type: 'GET',
      url: '/yelp/v3/businesses/search?categories=bars&term=dogs%20allowed&location=98103&limit=50&sort_by=distance',
      success: function(data) {
        data.businesses.forEach(function(item){
          new RenderBusinesses(item);
        });
        console.table(Bar.allBars);
      }
    });
  };
  module.Bar = Bar;
})(window);
