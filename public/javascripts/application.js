var App = {
  templates: JST,
  $el: $('#content'),
  close: function() {
    this.currentView.undelegateEvents();
    this.currentView.remove();
  },
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
  addToCart: function(item) {
    if (this.cart.length === 0) {
      $(this.cartView.$el).slideToggle();
    }
    this.cart.addItem(item);
  },
  emptyCart: function() {
    $(this.cartView.$el).slideToggle();
    this.cart.resetStorage();
  },
  cancelOrder: function() {
    this.cart.resetStorage();
    this.indexView();
  },
  getItemDetails: function(id) {
    var newItem = this.menu.get(id);

    this.close();
    this.currentView = new ItemDetailsView({
      model: newItem,
    })
    this.currentView.render();
    appRouter.navigate('menu/' + id, { trigger: false });
  },
  goToCheckout: function() {
    $(this.cartView.$el).hide();
    this.close();
    this.currentView  = new CheckoutView({
      collection: this.cart,
    });
    appRouter.navigate('checkout', { trigger: false });
  },
  renderHeader: function() {
    new HeaderView({
      collection: this.cart,
    });
  },
  renderCart: function() {
    if (!this.cart) {
      this.cart = new Cart();
      this.cartView = new CartView({
        collection: this.cart,
      });
    }
    this.cart.length === 0 ? $(this.cartView.$el).hide() : $(this.cartView.$el).show();
  },
  index: function() {
    if (this.currentView) { 
      this.close();
      this.unbind(); 
    }

    this.currentView = new MenuView({
      collection: this.menu
    });

    this.renderCart();
    this.renderHeader();
    this.bindEvents();
    appRouter.navigate('menu', { trigger: false });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on('go_to_checkout', this.goToCheckout);
    this.on('get_item_details', this.getItemDetails);
    this.on('go_to_homepage', this.index);
    this.on('cancel_order', this.cancelOrder);
    this.on('empty_cart', this.emptyCart);
    this.on('add_to_cart', this.addToCart);
    this.on('remove_from_cart', this.cart.removeItem.bind(this.cart));
  },
}

Handlebars.registerHelper('formatPrice', function(price) {
  return Number(price).toFixed(2);
});
