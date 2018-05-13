var router = new (Backbone.Router.extend({
  routes: {
    'checkout' : App.goToCheckout,
    'menu/:id': App.getItemDetails,
    'menu': App.indexView,
  },
  index: function() {
    App.indexView();
  },
  initialize: function() {
    this.route(/^\/?/, this.index);
  }
}))();

Backbone.history.start({
  pushState: true
});

$(document).on('click', "a[href^='/']", function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr('href').replace('/', ''), { trigger: true });
});