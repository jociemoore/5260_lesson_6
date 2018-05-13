var CartView = Backbone.View.extend({
  attributes: {
    id: 'cart',
  },
  template: App.templates.cart,
  events: {
    'click .checkout': 'goToCheckout'
  },
  goToCheckout: function(e) {
    e.preventDefault();
    this.trigger('go_to_checkout');
  },
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: this.collection.getTotal(),
    }));
    this.$el.prependTo(App.$el.closest('main'));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'cart_updated', this.render);
  }
});