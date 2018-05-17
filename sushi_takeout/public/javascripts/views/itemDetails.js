var ItemDetailsView = Backbone.View.extend({
  attributes: {
    id:'item_details',
  },
  template: App.templates.itemDetails,
  events: {
    'click .add_cart': 'addItem',
    'click .close': 'goToHomepage',
    'click .nav': 'changeItem'
  },
  changeItem: function(e) {
    e.preventDefault();
    var $e = $(e.currentTarget);
    var currentId = this.model.get('id');
    var newId = App.getNextItemId($e, currentId);

    App.trigger('change_item', newId);
  },
  goToHomepage: function(e) {
    e.preventDefault();
    App.trigger('go_to_homepage');
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