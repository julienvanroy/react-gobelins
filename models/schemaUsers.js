let mongoose = require('mongoose');

let usersSchema = new mongoose.Schema({
    username: String,
    password: String,
    admin: Boolean,
    avatar: String,
    favorites: ["btc-bitcoin","eth-ethereum"],
}, { versionKey: false });

module.exports = mongoose.model('users', usersSchema);
