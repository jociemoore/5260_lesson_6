var ItemDetailsView = Backbone.View.extend({
  attributes: {
    id:'item_details',
  },
  template: App.templates.itemDetails,
  render: function() {
    this.$el.html(this.template(this.model));
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});