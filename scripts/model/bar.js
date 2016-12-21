'use strict';
(function (module) {
  var Bar = {};

  Bar.allBars = [];

  function Business(opts){
    this.name = opts.name;
    this.barID = opts.id;
    this.latitude = opts.coordinates.latitude;
    this.longitude = opts.coordinates.longitude;
    // note: address is an array of 3 items
    this.address = opts.location.display_address;
    this.phone = opts.display_phone;
    this.image = opts.image_url;
    this.price = opts.price;
    this.rating = opts.rating;
    this.closed = opts.is_closed;
    Bar.allBars.push(this);
  }
  Business.createTable = function(){
    webDB.execute(
    'CREATE TABLE IF NOT EXISTS bars_database (' +
      'id INTEGER PRIMARY KEY, ' +
      'name VARCHAR NOT NULL, ' +
      'latitude FLOAT NOT NULL, ' +
      'longitude FLOAT NOT NULL, ' +
      'address VARCHAR NOT NULL, ' +
      'phone VARCHAR NOT NULL, ' +
      'image VARCHAR NOT NULL, ' +
      'price VARCHAR NOT NULL, ' +
      'rating FLOAT NOT NULL, ' +
      'closed BOOLEAN);',
      function(){
        console.log('table render successful');
        Bar.requestData();
      }
  );
  };

  Business.prototype.insertRecord = function(){
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO bars_database (name, latitude, longitude, address, phone, image, price, rating, closed) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);',
          'data': [this.name, this.latitude, this.longitude, this.address, this.phone, this.image, this.price, this.rating, this.closed]
        }
      ]
    );
  };

  Bar.requestData = function(callback){
    $.ajax({
      type: 'GET',
      url: '/yelp/v3/businesses/search?categories=bars&term=dogs%20allowed&location=98103&limit=50&sort_by=distance',
      success: function(data) {
        data.businesses.forEach(function(item){
          var biz = new Business(item);
          biz.insertRecord();
        });
        
        if (callback) {
          callback(Bar.allBars);
        }
        // console.table(Bar.allBars);
      }
    });
  };
  // Business.createTable();
  module.Bar = Bar;
})(window);
