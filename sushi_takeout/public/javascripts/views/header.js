var HeaderView = Backbone.View.extend({
  tagName: 'header',
  template: App.templates.header,
  events: {
    'click .logo' : 'renderHomepage',
    'click .cart' : 'renderHomepage',
  },
  renderHomepage: function(e) {
    e.preventDefault();
    App.trigger('go_to_homepage');
  },
  render: function() {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity() || 0,
    }));
    App.$el.closest('body').prepend(this.$el);
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'cart_updated', this.render);
  }
});