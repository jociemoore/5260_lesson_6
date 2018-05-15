var path = require('path');
var Menu = require(path.resolve(path.dirname(__dirname), 'modules/menu.js'));

module.exports = function(router) {
  router.route('/').get(function(req, res, next) {
    res.redirect('/menu');
  }).post(function(req, res) {
    res.redirect('/menu');
  });
};
