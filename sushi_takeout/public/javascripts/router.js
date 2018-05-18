var appRouter = new (Backbone.Router.extend({
  routes: {
    'checkout' : 'checkoutView',
    'menu/:id' : 'itemView',
    'menu': 'menuView',
  },
  menuView: function() {
    App.indexView();
  },
  itemView: function(id) {
    App.getItemDetails(id);
  },
  checkoutView: function() {
    App.goToCheckout();
  },
  index: function() {
    this.navigate('/menu');
    App.indexView();
  },
  initialize: function() {
    this.route(/^\/?$/, this.index);
  }
}))();

Backbone.history.start({
  pushState: true,
});

$(document).on('click', "a", function(e) {
  e.preventDefault();
});
