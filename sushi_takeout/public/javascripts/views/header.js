var HeaderView = Backbone.View.extend({
  tagName: 'header',
  template: App.templates.header,
  render: function() {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity() || 0,
    }));
    this.$el.prependTo(App.$el.closest('body'));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'cart_updated', this.render);
  }
});