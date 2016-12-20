'use strict';

require('dotenv').load();

var express = require('express');
var path = require('path');
var requestProxy = require('express-request-proxy');
var app = express();

app.get('/yelp/*', function(req, res){
  console.log('req.params', req.params);
  console.log('req.query', req.query);

  requestProxy({
    url: 'http://api.yelp.com/' + req.params[0],
    headers: {
      Authorization: 'Bearer ' + process.env.YELP_TOKEN,
    },
    query: req.query,
  })(req, res);
});

app.use(express.static('./'));

app.listen(process.env.PORT, function(){
  console.log('server up ::', process.env.PORT);
});
