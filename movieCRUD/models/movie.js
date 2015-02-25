/**
 * Created by Sandeep on 01/06/14.
 */

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var movieSchema=new Schema({
    title:'String',
    year:'String',
    director:'String',
    genre:'String',
    plot: 'String',
    stars: 'String'
});

module.exports=mongoose.model('Movie',movieSchema);