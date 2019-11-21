let mongoose = require('mongoose');

let usersSchema = new mongoose.Schema({
    avatar: String,
    username: String,
    password: String,
    admin: Boolean,
    favorites: ["btc-bitcoin","eth-ethereum"],
}, { versionKey: false });

module.exports = mongoose.model('users', usersSchema);
