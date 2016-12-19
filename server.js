'use strict';

var Yelp = require('yelp');
var express = require('express'),
  path = require('path'),

  port = process.env.PORT || 3000,
  app = express();

var yelp = new Yelp({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
});

app.use(express.static('./'));

app.get('/api', function(request, response) {
  var params = {categories: 'bars', term: 'dogs allowed', location: 'Seattle'};
  if(request.query.location) {
    params.location = request.query.location;

    yelp.search(params)
    .then(function (data) {
      response.json(data);
      console.log('Holy shiittttt, it workssss');
    });
  }
});
