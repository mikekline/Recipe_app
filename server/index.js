const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const cors = require('cors');
const Port = 4000;

app.use(cors())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
app.use(express.urlencoded());
app.use(express.json());


//conecting to the database, uses db/index.js
const db = require('./db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const recipeRouter = require('./routes/recipe_router')
app.use('/recipe_app', recipeRouter) //use = mounts path |||  (/api or /?) ||| use as end point where form is


/* getting from server and displaying /test end point */ 
// app.get('/test', (req, res) => {
//     res.send('Hello World!')
// })



app.listen(Port, () => {
    console.log(`Server running on port: ${Port}`)
})