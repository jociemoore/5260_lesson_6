var HeaderView = Backbone.View.extend({
  el: 'body > header',
  template: App.templates.header,
  events: {
    'click .logo' : 'renderHomepage',
    'click .cart' : 'renderHomepage',
  },
  renderHomepage: function(e) {
    e.preventDefault();
    this.trigger('go_to_homepage');
  },
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