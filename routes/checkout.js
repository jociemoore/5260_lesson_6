var path = require('path');
var Menu = require(path.resolve(path.dirname(__dirname), 'modules/menu.js'));

module.exports = function(router) {
  router.route('/checkout').get(function(req, res, next) {
    res.render('checkout', {
      menu: Menu.get()
    });
  });
};