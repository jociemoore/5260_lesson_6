var appRouter = new (Backbone.Router.extend({
  routes: {
    'checkout' : App.goToCheckout,
    'menu/:id': App.getItemDetails,
  },
  index: function() {
    App.indexView();
  },
  initialize: function() {
    this.route(/menu\/?$/, this.index);
  }
}))();

Backbone.history.start({
  pushState: true,
});

$(document).on('click', "a[href^='/']", function(e) {
  e.preventDefault();
  var route = $(e.currentTarget).attr('href').replace('/', '').concat('/');

  appRouter.navigate(route, { trigger: false });
});

$(document).on('click', 'li header', function(e) {
  e.preventDefault();
  var id = $(e.target).closest('li').attr('data-id');
  var route = 'menu/' + id;

  appRouter.navigate(route, { trigger: false });
});