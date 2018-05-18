var App = {
  templates: JST,
  $el: $('#content'),
  atMenuEnd: function(id) {
    return id === this.menu.length;
  },
  atMenuStart: function(id) {
    return id === 1;
  },
  getNextItemId: function($e, currentId) {
    var next = $e.hasClass('next');
    var prev = $e.hasClass('prev');

    if (next && !this.atMenuEnd(currentId)) {
      currentId += 1;
    } else if (prev && !this.atMenuStart(currentId)) {
      currentId -= 1;
    } else if (next) {
      currentId = 1;
    } else {
      currentId = this.menu.length;
    }

    return currentId;
  },
  toggleCart: function() {
    $(this.cartView.$el).slideToggle();
  },
  hideCart: function() {
    $(this.cartView.$el).css('display', 'none');
    this.cartView.undelegateEvents(); 
  },
  showCart: function() {
    this.cartView.delegateEvents(); 
    $(this.cartView.$el).css('display', 'block');
  },
  renderItemView: function(menuItem) {
    new ItemView({
      model: menuItem,
    });
  },
  renderMenu: function() {
    this.menu.each(this.renderItemView);
  },
  renderHeader: function() {
    this.header = new HeaderView({
      collection: this.cart,
    });
  },
  createCart: function() {
    this.cart = new Cart();
    this.cartView = new CartView({
      collection: this.cart,
    });
  },
  addToCart: function(item) {
    if (this.cart.length === 0) {
      this.toggleCart();
    }
    this.cart.addItem(item);
  },
  cancelOrder: function() {
    this.cart.resetStorage();
    this.indexView();
  },
  emptyCart: function() {
    this.toggleCart();
    this.cart.resetStorage();
  },
  getItemDetails: function(id) {
    var newItem = this.menu.get(id);

    this.currentView = (new ItemDetailsView({
      model: newItem,
    })).render();

    appRouter.navigate('menu/' + id, { trigger: false });
  },
  goToCheckout: function() {
    this.hideCart();
    this.checkout = new CheckoutView({
      collection: this.cart,
    });
    this.currentView = this.checkout;

    appRouter.navigate('checkout', { trigger: false });
  },
  indexView: function() {
    this.index = new IndexView();
    this.currentView = this.index;
    this.renderMenu();
    this.createCart();
    this.renderHeader();
    this.bindEvents();

    if (this.cart.length === 0) {
      this.hideCart();
    } else {
      this.showCart();
    }

    appRouter.navigate('menu', { trigger: true});
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.index, 'get_item_details', this.getItemDetails);
    this.listenTo(this.cartView, 'go_to_checkout', this.goToCheckout);
    // this.on('change_item', this.getItemDetails);
    this.on('go_to_homepage', this.indexView);
    this.on('cancel_order', this.cancelOrder);
    this.on('empty_cart', this.emptyCart);
    this.on('add_to_cart', this.addToCart);
    this.on('remove_from_cart', this.cart.removeItem.bind(this.cart));
  },
}

Handlebars.registerHelper('formatPrice', function(price) {
  return Number(price).toFixed(2);
});
