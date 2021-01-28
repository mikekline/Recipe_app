const express = require('express')
const router = express.Router()
const recipe = require('../controllers/recipe')

//use this as endpoint conect to form post
router.post('/add_recipe', recipe.createRecipe)

module.exports = router