this["JST"] = this["JST"] || {};

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
    + "</h2><a class='add_cart' href='#'>Add to cart</a></footer></article><aside><h3>Nutritional Information</h3><table><tbody><tr><td>Protein</td><td>"
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