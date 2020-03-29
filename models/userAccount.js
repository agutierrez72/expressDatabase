const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        city: {
            type: String
        },
        state: {
            type: String
        },
        country: {
            type: String
        },
        zipcode: {
            type: String
        }
    },
    admin:{
        type: Boolean
    }
})

module.exports = mongoose.model('User', userSchema)