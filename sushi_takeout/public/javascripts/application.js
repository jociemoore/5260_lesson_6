var App = {
  templates: JST,
  $el: $('#content'),
  renderMenu: function() {
    this.menu.each(this.renderItemView);
  },
  renderItemView: function(menuItem) {
    new ItemView({
      model: menuItem,
    });
  },
  indexView: function() {
    this.index = new IndexView();
    this.renderMenu();
    this.bindEvents();
  },
  getItemDetails: function(args) {
    var id = Number(args[0]) - 1;
    var item = this.menu.toJSON()[id];
    new ItemDetailsView({
      model: item,
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.index, 'get_item_details', this.getItemDetails);
  },
  init: function() {
    this.indexView();
  }
}