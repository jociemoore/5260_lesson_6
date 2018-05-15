var HeaderView = Backbone.View.extend({
  el: 'body > header',
  template: App.templates.header,
  render: function() {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity() || 0,
    }));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'cart_updated', this.render);
  }
});