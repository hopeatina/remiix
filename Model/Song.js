'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
var SongSchema = new Schema({
    title: String,
    createDate: Date,
    updated: {type: Date, default: Date.now},
    thumbnail: String,
    time: String
});
//export our module to use in server.js
module.exports = mongoose.model('Song', SongSchema);