var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var db = mongoose.connection;

var mySchema = Schema({
    name: String,
    password: String
});

module.exports = db.model('User', mySchema);