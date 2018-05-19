var ItemView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.item,
  events: {
    'click .add_cart' : 'addItem'
  },
  addItem: function(e) {
    e.preventDefault();
    App.trigger('add_to_cart', this.model);
  },
  render: function() {
    var id = this.model.id;

    this.$el.attr('data-id', id);
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
  }
});