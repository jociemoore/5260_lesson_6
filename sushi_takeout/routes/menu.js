var path = require('path');
var Menu = require(path.resolve(path.dirname(__dirname), 'modules/menu.js'));

module.exports = function(router) {
  router.route('/menu').get(function(req, res, next) {
    res.render('index', { 
      title: 'Sushi Restaurant Website',
      menu:  Menu.get()
    });
  });
};
