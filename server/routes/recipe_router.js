const express = require('express');
const router = express.Router();
const recipe = require('../controllers/recipe');

//used as endpoint conect to form post 
router.post('/add_recipe', recipe.createRecipe);

//used as endpoint on displaying a list of recipes from server
router.get('/recipes', recipe.getRecipes);

module.exports = router;