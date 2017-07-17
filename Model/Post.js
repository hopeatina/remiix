var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
var PostSchema = new Schema({
    title: String,
    htmlText: String,
    createDate: Date,
    updated: {type: Date, default: Date.now}
});

//export our module to use in server.js
var Post = mongoose.model('Post', PostSchema);

module.exports = Post;