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
  addItem: function(e) {
    e.preventDefault();
    App.trigger('add_to_cart', this.model);
  },
  goToHomepage: function(e) {
    e.preventDefault();
    App.trigger('go_to_homepage');
  },
  changeItem: function(e) {
    e.preventDefault();
    var $e = $(e.currentTarget);
    var currentId = this.model.get('id');
    var $currentItem = this.$el.children('div');
    var newId = App.getNextItemId($e, currentId);
    var newItem = App.menu.get(newId);
    var direction = $e.hasClass('next') ? 'next' : 'prev';

    new ItemDetailsView({
      model: newItem
    }).render($currentItem, direction);

    appRouter.navigate('menu/' + newId, { trigger: false });
  },
  animateItems: function($previousItem, direction) {
    var $currentItem = this.$el.children('div');
    var distance; 

    $previousItem.css('z-index', 10);
    this.$el.append($previousItem);
    App.$el.html(this.$el);
    distance = direction === 'next' ? '+=300' : '-=300';

    $previousItem.animate({
      left: distance,
      opacity: 0
    }, 200, function() {
      $(this).remove();
    }); 
  },
  render: function($previousItem, direction) {
    this.$el.html(this.template(this.model.toJSON()));

    if ($previousItem && direction) {
      this.animateItems($previousItem, direction);
    } else {
      App.$el.html(this.$el);
    }
  },
});