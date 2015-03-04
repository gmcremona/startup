(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['movielist'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	          <tr>\r\n	            <td>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</td>\r\n	            <td>"
    + alias3(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"year","hash":{},"data":data}) : helper)))
    + "</td>\r\n	            <td>"
    + alias3(((helper = (helper = helpers.director || (depth0 != null ? depth0.director : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"director","hash":{},"data":data}) : helper)))
    + "</td>\r\n	        \r\n	            <td><a class=\"btn\" href=\"#/edit/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">Edit</a></td>\r\n	          </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return " <a href=\"#/new\" class=\"btn btn-primary\">New</a>\r\n	    <hr />\r\n	    <table class=\"table striped\">\r\n	      <thead>\r\n	        <tr>\r\n	          <th>Title</th><th>Release year</th><th>Director</th><th></th>\r\n	        </tr>\r\n	      </thead>\r\n	      <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	      </tbody>\r\n	    </table>";
},"useData":true});
})();