/**
 * Created by Bjarke on 05-04-2015.
 */
var express = require('express');
var router = express.Router();
var http = require('http');

/* GET danske vejnavne. */
router.get('/', function(req, res, next) {
  console.log("Yeah!");
  http.get('http://webapi.aws.dk/vejnavne.json?postnr=2400&vejnavn=kilde&maxantal=20', function(response) {
      console.log("Oh yeah!");
      response.pipe(res);
  });
});

module.exports = router;
