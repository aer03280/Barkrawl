'use strict';
(function (module) {
  var Bar = {};

  Bar.allBars = [];

  function BarObj(opts){
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
  Bar.createTable = function(){
    webDB.execute(
    'CREATE TABLE IF NOT EXISTS bars_database (' +
      'id INTEGER PRIMARY KEY, ' +
      'name VARCHAR NOT NULL, ' +
      // 'barID VARCHAR NOT NULL' +
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
        mapView.setLocation();
      }
  );
  };

  BarObj.prototype.insertRecord = function(){
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO bars_database (name, latitude, longitude, address, phone, image, price, rating, closed) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);',
          'data': [this.name, this.latitude, this.longitude, this.address, this.phone, this.image, this.price, this.rating, this.closed]
        }
      ]
    );
  };

  Bar.dropTable = function(){
    webDB.execute('DROP TABLE bars_database', Bar.createTable);
  };
  Bar.requestData = function(callback){
    Bar.allBars = [];
    console.log('Bar.allBars', Bar.allBars);

    // Bar.dropTable();
    $.ajax({
      type: 'GET',
      url: '/yelp/v3/businesses/search?categories=bars&term=dogs%20allowed&location='
      + mapView.userLocation
      + '&limit=10&sort_by=distance',
      success: function(data) {
        data.businesses.forEach(function(item){
          var curBar = new BarObj(item);
          curBar.insertRecord();
        });
        mapView.setMarkers();
        if (callback) {
          callback();
        }
      },
      error: function(jqXHR) {
        sweetAlert('Oops! Street addresses work best, try a different search!');
      }
    });
  };
  Bar.createTable();
  module.Bar = Bar;
})(window);
