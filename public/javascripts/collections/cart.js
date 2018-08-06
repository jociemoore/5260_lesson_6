var Cart = Backbone.Collection.extend({
  addItem: function(item) {
    var existing = this.get(item.get('id'));

    if (existing) {
      existing.set('quantity', existing.get('quantity') + 1);
    } else {
      existing = item.clone();
      existing.set('quantity', 1);
      this.add(existing);
    }

    this.update();
  },
  removeItem: function(item) {
    var existing = this.get(item.get('id'));
    var quantity = existing.get('quantity');
    
    if (quantity === 1) {
      this.remove(existing);
    } else {
      existing.set('quantity', quantity - 1);
    }

    this.update();
  },
  update: function() {
    this.setTotal();
    this.setQuantity();
    this.updateStorage();
    this.trigger('cart_updated');
  },
  setTotal: function() {
    this.total = this.toJSON().reduce(function(a,b) {
      return a + (b.quantity * b.price);
    }, 0);
  },
  getTotal: function() {
    return this.total;
  },
  setQuantity: function() {
    this.quantity = this.toJSON().reduce(function(a,b) {
      return a + (b.quantity);
    }, 0);
  },
  getQuantity: function() {
    return this.quantity;
  },
  readStorage: function() {
    var storedCart = JSON.parse(localStorage.getItem('cart'));
    this.reset(storedCart);
    this.setTotal();
    this.setQuantity();
  },
  updateStorage: function() {
    localStorage.setItem('cart', JSON.stringify(this.toJSON()));
  },
  resetStorage: function() {
    this.reset();
    this.update();
  },
  initialize: function() {
    this.readStorage();
  }
});