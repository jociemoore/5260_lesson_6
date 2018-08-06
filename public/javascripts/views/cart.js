var CartView = Backbone.View.extend({
  el: '#cart',
  template: App.templates.cart,
  events: {
    'click .checkout': 'goToCheckout',
    'click .empty_cart': 'emptyCart'
  },
  goToCheckout: function(e) {
    e.preventDefault();
    App.trigger('go_to_checkout');
  },
  emptyCart: function(e) {
    e.preventDefault();
    App.trigger('empty_cart');
  },
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: this.collection.getTotal(),
    }));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'cart_updated', this.render);
  }
});