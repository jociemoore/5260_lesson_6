var ItemDetailsView = Backbone.View.extend({
  attributes: {
    id:'item_details',
  },
  template: App.templates.itemDetails,
  events: {
    'click .add_cart': 'addItem',
  },
  addItem: function(e) {
    e.preventDefault();
    App.trigger('add_to_cart', this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});