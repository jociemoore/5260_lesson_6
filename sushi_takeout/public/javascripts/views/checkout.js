var CheckoutView = Backbone.View.extend({
  attributes: {
    id: 'checkout',
  },
  events: {
    'click .fa-plus': 'addItem',
    'click .fa-minus': 'removeItem',
    'click footer a': 'cancelOrder'
  },
  template: App.templates.checkout,
  cancelOrder: function(e) {
    e.preventDefault;
    App.trigger('cancel_order');
  },
  getModel(e) {
    var id = Number($(e.target).closest('tr').attr('data-id'));
    return this.collection.get(id);
  },
  addItem: function(e) {
    e.preventDefault();
    App.trigger('add_to_cart', this.getModel(e));
  },
  removeItem: function(e) {
    e.preventDefault();
    App.trigger('remove_from_cart', this.getModel(e));
  },
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: this.collection.getTotal(),
    }))
    App.$el.html(this.$el);
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'cart_updated', this.render);
  }
});