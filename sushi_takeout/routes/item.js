var path = require('path');
var _ = require ('underscore');
var Menu = require(path.resolve(path.dirname(__dirname), 'modules/menu.js'));

module.exports = function(router) {
  router.get('/menu/:id', function(req, res, next) {
    var id = req.params.id;
    res.render('item', {
      item: _(Menu.get()).findWhere({ id: Number(req.params.id)})
    });
  });
};