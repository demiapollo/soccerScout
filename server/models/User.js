const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
});

const User = model('User', UserSchema);

module.exports = User;