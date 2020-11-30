const Recipe = require('../models/recipes')

createRecipe = (req, res) => {
    const body = req.body


    // if (!body) {
    //     return res.status(400).json({
    //         success: false,
    //         error: 'You must provide a title',
    //     })
    // }
    console.log(body)
    const recipe = new Recipe(body)
    
    if (!recipe) {
        return res.status(400).json({ success: false, error: err })
    }

    recipe
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'recipe created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'recipe not created!',
            })
        })

}

module.exports = {createRecipe};