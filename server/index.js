const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.PORT;
const path = require('path');
require('dotenv').config();


app.use(cors());
app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());



//conecting to the database, uses db/index.js
const db = require('./db');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



//servers React files
app.use(express.static(path.join('public', 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join('public', 'build', 'index.html'));
});



//this use = mounts path for endpoints
const recipeRouter = require('./routes/recipe_router');
app.use('/recipe_app', recipeRouter); 



/* getting from server and displaying /test end point */ 
app.get('/test', (req, res) => {
    res.send('Hello World!')
})



app.listen(Port, () => {
    console.log(`Server running on port: ${Port}`);
});