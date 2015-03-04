    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
        options.url = 'http://localhost:8000/api' + options.url;
    });

    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };


    var Movie = Backbone.Model.extend({
        urlRoot: '/movies'

    });

    var MovieList = Backbone.Collection.extend({
        url: '/movies',

    });



    var MovieListView = Backbone.View.extend({
        el: '.page',
        render: function() {
            var that = this;
            var movieList = new MovieList();
            movieList.fetch({
                success: function(movieList) {

                    var template = Handlebars.templates.movielist;
                    obj = JSON.parse(JSON.stringify(movieList.models));
                    for (var i = obj.length - 1; i >= 0; i--) {
                        localStorage.setItem(obj[i]._id, obj[i]);
                    };
                    that.$el.html(template(obj)); //problemas aca seguro*/
                }
            })
        }
    });

    var movieListView = new MovieListView();

    var Contador = (function() {
        var i;

        function Contador() {
            i = 0;
        }

        Contador.prototype.up = function() {
            i++;
            return i;
        }


        Contador.prototype.down = function() {
            i--;
            return i;
        }

        return Contador;
    })();

    var cont = new Contador();

    var MovieEditView = Backbone.View.extend({
        el: '.page',
        events: {
            'submit .edit-movie-form': 'saveMovie',
            'click .delete': 'deleteMovie'
        },
        saveMovie: function(ev) {
            var movieDetails = $(ev.currentTarget).serializeObject();

            var movie = new Movie();
            movie.save(movieDetails, {
                success: function(movie) {
                    router.navigate('', {
                        trigger: true
                    });
                }
            });
            return false;
        },
        deleteMovie: function(ev) {
            var that=this;
            this.movie.destroy({
                success: function() {
                    console.log('destroyed');
                   
                    localStorage.removeItem(that.movie.attributes._id);
                    router.navigate('', {
                        trigger: true
                    });
                }
            });
            return false;
        },
        render: function(options) {
            var that = this;
            if (options.id) {
                that.movie = new Movie({
                    id: options.id
                });
                that.movie.fetch({
                    success: function(movie) {
                        var template = Handlebars.templates.editmovie;
                        obj = JSON.parse(JSON.stringify(movie));
                        that.$el.html(template(obj));
                    }
                })
            } else {
                var template = Handlebars.templates.editmovie;
                that.$el.html(template);
            }
        }
    });



    var movieEditView = new MovieEditView();


    var Router = Backbone.Router.extend({
        routes: {
            "": "home",
            "edit/:id": "edit",
            "new": "edit",
        }
    });



    var router = new Router();
    router.on("route:home", function() {
        movieListView.render();
    });
    router.on('route:edit', function(id) {
        movieEditView.render({
            id: id
        });
    })

    Backbone.history.start();
