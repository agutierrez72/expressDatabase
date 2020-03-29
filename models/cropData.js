const mongoose = require('mongoose')

const cropSchema = new mongoose.Schema({
    crop: {
        type: String
    },
    waterUse: {
        type: Number
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
    season: {
        month: {
            type: String
        },
        year: {
            type: Number
        },
    },
    fertilizer: {
        N: {
            type: Number
        },
        P: {
            type: Number
        },
        K: {
            type: Number
        }
    },
    cropYeild: {
        type: Number
    },
    comments: {
        type: String
    }
})