'use strict';
(function (module) {
  var Bar = {};

  Bar.allBars = [];

//I have a feeling we need to refactor this still -nikko
  function Business(opts){
    Object.keys(opts).forEach(function(element,index){
      this[element] = opts[element];
      this.name = opts[index].name;
      this.location = {
        latitude: this.latitude = opts[index].coordinates.latitude,
        longitude: this.longitude = opts[index].coordinates.longitude
      };
      // this.displayAddress = opts[index].display_address[0] + ' ' +  opts[index].display_address[1] + ' ' + opts[index].display_address[2];
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
      url: '/yelp/v3/businesses/search?categories=bars&term=dogs%20allowed&location=seattle&limit=50',
      success: function(data) {
        var bar = new Business(data.businesses);
        Bar.allBars.push(bar);
        console.table(Bar.allBars);

      }
    });
  };
  module.Bar = Bar;
})(window);
