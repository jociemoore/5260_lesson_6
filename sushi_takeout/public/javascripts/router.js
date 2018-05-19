var appRouter = new (Backbone.Router.extend({
  routes: {
    'checkout': 'checkoutView',
    'menu/:id': 'itemView',
    'menu': 'indexView',
  },
  indexView: function() {
    this.navigate('/menu');
    App.index();
  },
  itemView: function(id) {
    App.getItemDetails(id);
  },
  checkoutView: function() {
    App.goToCheckout();
  },
  initialize: function() {
    this.route(/^\/?$/, this.indexView);
  }
}))();

Backbone.history.start({
  pushState: true,
});

$(document).on('click', "a", function(e) {
  e.preventDefault();
});
