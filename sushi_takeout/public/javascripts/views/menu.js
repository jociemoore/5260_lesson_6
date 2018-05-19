var MenuView = Backbone.View.extend({
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
    
    App.trigger('get_item_details', id);
  },
  itemView: function(menuItem) {
    return new ItemView({
      model: menuItem,
    });
  },
  render: function() {
    var self = this;
    this.collection.each(function(item) {
      self.$el.append(self.itemView(item).$el);
    });
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});