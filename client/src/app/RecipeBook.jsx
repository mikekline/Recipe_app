import React,{Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import AddRecipe from './AddRecipe.jsx';
import AllRecipes from './AllRecipes.jsx';
import './css/RecipeBook.css';


class RecipeBook extends Component {
  render() {

    return (
      <div className='recipeBookNav'>
     
        <BrowserRouter>
        
            <nav>   
              <Link className='bookOptions' to='/Recipe_app/recipe_book/Add_Recipe'>
                Add a Recipe
              </Link>
              <Link className='bookOptions' to='/Recipe_app/recipe_book/recipes'>
                All Recipes
              </Link>
              {/* grocery list: takes ingrediants from recipes and adds them to a list able to +/- to list */}
              {/* search and sort recipe list */}
              {/* catagories /manage catagories include user added catagories*/}
            </nav>

            <Switch>
              <Route path='/Recipe_app/recipe_book/Add_Recipe' component={AddRecipe} />
              <Route path='/Recipe_app/recipe_book/recipes' component={AllRecipes} />
            </Switch>
         
        </BrowserRouter>

      </div>        
    )
  }
}

export default RecipeBook;

