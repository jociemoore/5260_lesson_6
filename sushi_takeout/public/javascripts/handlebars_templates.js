this["JST"] = this["JST"] || {};

this["JST"]["cart"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "><figure><img src="
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + " alt='cart-item' /></figure><p>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + " x $"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><section><h3>Your</h3><h3>shopping cart</h3><p class='total'>$"
    + container.escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"total","hash":{},"data":data}) : helper)))
    + "</p><p></p><footer><a class='left empty_cart' href='#'>Empty cart</a><a class='right checkout' href='/checkout'>Checkout<a></footer></section>";
},"useData":true});

this["JST"]["checkout"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "><td><img src="
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + " alt='cart-item' /></td><td>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</td><td><span class='quantity_modifier'><i class='fa fa-minus' aria-hidden='true'></i></span><p>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</p><span class='quantity_modifier'><i class='fa fa-plus' aria-hidden='true'></i></span></td><td>$"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</td></tr>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class='img_top'></div><section><h1>Order Details</h1><table><thead><tr><th>Item</th><th></th><th>Quantity</th><th>Price</th></tr></thead><tbody>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody></table><p>Total:<span class='total'>$"
    + container.escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"total","hash":{},"data":data}) : helper)))
    + "</span></p><footer><a href='/'>Cancel order</a><form action='/' method='post'><input type='submit' value='ORDER NOW!'></form></footer></section><div class='img_bottom'></div>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a class='logo' href='/'> 	<img src='images/logo.png' alt='logo' /></a><div class='cart'><a href='/'><span class='left'>Shopping Cart</span><span class='right'><!----><span class='count'>"
    + container.escapeExpression(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</span> 	items</span></a></div>";
},"useData":true});

this["JST"]["item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article><header><figure><img src="
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + " alt='menu-item' /></figure><h2 class='name'>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2></header><p class='price'>$"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p><footer><a class='add_cart' href='#'>Add to cart</a></footer></article>";
},"useData":true});

this["JST"]["itemDetails"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div><div class='nav prev'><img src='images/nav-prev.png' alt='prev' /></div><figure><img src="
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + " alt='selected-item'></figure><article><a class='close' href='/'>+</a><h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1><p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p><footer><h2>$"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</h2><a class='add_cart' href='/menu/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "'>Add to cart</a></footer></article><aside><h3>Nutritional Information</h3><table><tbody><tr><td>Protein</td><td>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.protein : stack1), depth0))
    + "</td></tr><tr><td>Fat (total)</td><td>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.fat : stack1), depth0))
    + "</td></tr><tr><td>Carbohydrate</td><td>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.carbs : stack1), depth0))
    + "</td></tr><tr><td>Energy (kj)</td><td>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.energyKj : stack1), depth0))
    + "</td></tr><tr><td>Energy (kcal)</td><td>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.energyKcal : stack1), depth0))
    + "</td></tr><tr><td>Sugar</td><td>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.sugar : stack1), depth0))
    + "</td></tr></tbody></table></aside><div class='nav next'><img src='images/nav-next.png' alt='next' /></div></div>";
},"useData":true});