var IndexView = Backbone.View.extend({
  tagName: 'ul',
  attributes: {
    id: 'items',
  },
  events: {
    'click li header': 'getItemDetails',
  },
  getItemDetails: function(e) {
    e.preventDefault();
    var $elem = $(e.target).closest('li');
    var id = $elem.attr('data-id');
    this.trigger('get_item_details', id);
  },
  render: function() {
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});