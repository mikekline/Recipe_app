import React,{Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import AddRecipe from './AddRecipe.jsx';
import AllRecipes from './AllRecipes.jsx';
// import './App.css';
import './RecipeBook.css';


class RecipeBook extends Component {
  render() {


    return (
      <div className="recipeBookNav">
     
        

        <BrowserRouter>
            
            <nav>      
              <Link className="bookOptions" to="/recipe_book/Add_Recipe">
                Add a Recipe
              </Link>
              <Link className="bookOptions" to="/recipe_book/recipes">
                All Recipes
              </Link>
              {/* grocery list: takes ingrediants from recipes and adds them to a list able to +/- to list */}
            </nav>

            <Switch>
              <Route path="/recipe_book/Add_Recipe" component={AddRecipe} />
              <Route path="/recipe_book/recipes" component={AllRecipes} />
            </Switch>
         
        </BrowserRouter>



      </div>        
    )
  }
}

export default RecipeBook;

