let mongoose = require('mongoose');

let usersSchema = new mongoose.Schema({
    name: String,
    password: String,
    roles: [String],
    favorites: [{}],
}, { versionKey: false });

module.exports = mongoose.model('users', usersSchema);
