
const mongoose = require("mongoose")

const moviSchema = new mongoose.Schema( {
    title: {
        type: String
    },
    director: {
        type: String
    },
    stars: {
        type: [Array]
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    showtimes: {
        type: Array
    }
})


//creamos ahora el modelo

const Movie = mongoose.model("Movie", moviSchema)

module.exports = Movie