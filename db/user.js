var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var uri = 'mongodb://localhost:27017/todo';

var db = mongoose.createConnection(uri);

var mySchema = Schema({
    name: String,
    password: String
});

/* global db */
module.exports = db.model('User', mySchema);