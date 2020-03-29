const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required
    },
    username: {
        type: String,
        required
    },
    password: {
        type: String,
        required
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
        type: bool
    }
})

module.exports = mongoose.model('user', userSchema)