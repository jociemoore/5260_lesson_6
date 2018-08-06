var CheckoutView = Backbone.View.extend({
  attributes: {
    id: 'checkout',
  },
  template: App.templates.checkout,
  events: {
    'click .fa-plus': 'addItem',
    'click .fa-minus': 'removeItem',
    'click footer a': 'cancelOrder',
    "click input[type='submit']": 'cancelOrder'
  },
  addItem: function(e) {
    e.preventDefault();
    App.trigger('add_to_cart', this.getModel(e));
  },
  removeItem: function(e) {
    e.preventDefault();
    App.trigger('remove_from_cart', this.getModel(e));
  },
  cancelOrder: function(e) {
    e.preventDefault;
    App.trigger('cancel_order');
  },
  getModel(e) {
    var id = Number($(e.target).closest('tr').attr('data-id'));
    return this.collection.get(id);
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