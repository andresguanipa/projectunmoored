const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let userSchema = new Schema({

    name: {
        type: String,
        required: [true, 'name is required']
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'email is required']
    },

    date: {
        type: String,
        required: false
    },


});

userSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' })

module.exports = mongoose.model('Users', userSchema);