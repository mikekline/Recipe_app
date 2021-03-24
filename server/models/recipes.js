const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
const recipeSchema = new Schema({
  title: { type: String, required: true },
  ingredients: String,
  directions: String
});

module.exports = mongoose.model('recipe', recipeSchema);