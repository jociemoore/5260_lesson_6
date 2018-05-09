var express = require('express');
var router = express.Router();
var path = require('path');
var routeFiles = ['index', 'menu'];

routeFiles.forEach(function (route) {
  require(path.resolve(path.dirname(__dirname), 'routes/', route))(router);
});

module.exports = router;