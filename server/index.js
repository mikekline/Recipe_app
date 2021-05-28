const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const Port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());


//conecting to the database, uses db/index.js
const db = require('./db');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const recipeRouter = require('./routes/recipe_router');
app.use('/recipe_app', recipeRouter); //use = mounts path


app.listen(Port, () => {
    console.log(`Server running on port: ${Port}`);
});




console.log("test")

/* getting from server and displaying /test end point */ 
// app.get('/test', (req, res) => {
//     res.send('Hello World!')
// })