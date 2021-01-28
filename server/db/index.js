const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/recipe_app', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

//defult connection of the mongoose 
const db = mongoose.connection

module.exports = db