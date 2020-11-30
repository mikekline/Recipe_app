const express = require('express')

const recipe = require('../controllers/recipe')

const router = express.Router()

router.post('/recipe', recipe.createRecipe)

module.exports = router