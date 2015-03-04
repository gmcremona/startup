(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['editmovie'] = template({"1":function(depth0,helpers,partials,data) {
    return " 'Edit' ";
},"3":function(depth0,helpers,partials,data) {
    return " 'New' ";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return " \""
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" ";
},"7":function(depth0,helpers,partials,data) {
    return " '' ";
},"9":function(depth0,helpers,partials,data) {
    var helper;

  return " \""
    + this.escapeExpression(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"year","hash":{},"data":data}) : helper)))
    + "\" ";
},"11":function(depth0,helpers,partials,data) {
    var helper;

  return " \""
    + this.escapeExpression(((helper = (helper = helpers.director || (depth0 != null ? depth0.director : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"director","hash":{},"data":data}) : helper)))
    + "\" ";
},"13":function(depth0,helpers,partials,data) {
    var helper;

  return " \""
    + this.escapeExpression(((helper = (helper = helpers.genre || (depth0 != null ? depth0.genre : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"genre","hash":{},"data":data}) : helper)))
    + "\" ";
},"15":function(depth0,helpers,partials,data) {
    var helper;

  return "\""
    + this.escapeExpression(((helper = (helper = helpers.plot || (depth0 != null ? depth0.plot : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"plot","hash":{},"data":data}) : helper)))
    + "\" ";
},"17":function(depth0,helpers,partials,data) {
    var helper;

  return " \""
    + this.escapeExpression(((helper = (helper = helpers.stars || (depth0 != null ? depth0.stars : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"stars","hash":{},"data":data}) : helper)))
    + "\" ";
},"19":function(depth0,helpers,partials,data) {
    return " 'Update' ";
},"21":function(depth0,helpers,partials,data) {
    return " 'Create' ";
},"23":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	        <input type=\"hidden\" name=\"id\" value="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " />\r\n	       <button data-user-id="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " class=\"btn btn-danger delete\">Delete</button>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<form class=\"edit-movie-form\">\r\n	      <legend>"
    + ((stack1 = helpers['if'].call(depth0,depth0,{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</legend> \r\n	        <label>Title</label>\r\n	        <input name=\"title\" type=\"text\" value="
    + ((stack1 = helpers['if'].call(depth0,depth0,{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "> \r\n	        <label>Release year</label>\r\n	        <input name=\"year\" type=\"text\" value="
    + ((stack1 = helpers['if'].call(depth0,depth0,{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "> \r\n	        <label>Director</label>\r\n	        <input name=\"director\" type=\"text\" value="
    + ((stack1 = helpers['if'].call(depth0,depth0,{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "> \r\n	        <label>Genre</label>\r\n	        <input name=\"genre\" type=\"text\" value="
    + ((stack1 = helpers['if'].call(depth0,depth0,{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "> \r\n	        <label>Plot</label>\r\n	        <input name=\"plot\" type=\"text\" value="
    + ((stack1 = helpers['if'].call(depth0,depth0,{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "> \r\n	        <label>Stars</label>\r\n	        <input name=\"stars\" type=\"text\" value="
    + ((stack1 = helpers['if'].call(depth0,depth0,{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "> \r\n	        <hr />\r\n	       <button type=\"submit\" class=\"btn\">"
    + ((stack1 = helpers['if'].call(depth0,depth0,{"name":"if","hash":{},"fn":this.program(19, data, 0),"inverse":this.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + "</button> \r\n"
    + ((stack1 = helpers['if'].call(depth0,depth0,{"name":"if","hash":{},"fn":this.program(23, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	    </form>";
},"useData":true});
})();