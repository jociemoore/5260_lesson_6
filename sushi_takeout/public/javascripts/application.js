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
  renderHeader: function() {
    new HeaderView({
      collection: this.cart,
    });
  },
  indexView: function() {
    this.index = new IndexView();
    this.renderMenu();
    this.createCart();
    this.renderHeader();
    this.bindEvents();
  },
  createCart: function() {
    this.cart = new Cart();
    this.cart.view = new CartView({
      collection: this.cart,
    });
  },
  getItemDetails: function(id) {
    var id = Number(id) - 1;
    var item = this.menu.toJSON()[id];
    new ItemDetailsView({
      model: item,
    });
  },
  goToCheckout: function() {
    this.checkout = new CheckoutView({
      collection: this.cart,
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.index, 'get_item_details', this.getItemDetails);
    this.listenTo(this.cart.view, 'go_to_checkout', this.goToCheckout);
    this.on('add_to_cart', this.cart.addItem.bind(this.cart));
    this.on('remove_from_cart', this.cart.removeItem.bind(this.cart));
  },
}