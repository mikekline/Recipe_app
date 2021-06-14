import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
require('dotenv').config();
const getAllRecipes = process.env.REACT_APP_GETALLRECIPES;


class AllRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      allRecipes: []
    };
  }





  //gets a list of all recipes from server
  async componentDidMount() {
    await axios.get(getAllRecipes)
        .then(response => {
            this.setState({allRecipes: response.data.data});
        })
        .catch(function (error){
            console.log(error);
        })
  }

  



  render() {
    //gets allRecipes state once loaded from server to be displayed
    const listRecipes=this.state.allRecipes.map((recipe)=>
      <table>
        <tbody>
          <tr className='list' key={recipe.key}>
            <Link 
              className='recipeTitleDisplay'
              to={{
                pathname:`/recipe_book/recipes/${recipe.title}`, //how to actually render each page dynamicly though node render? then make a react  page to rout to though node, map app.get
                state:{
                  title: recipe.title,
                  ingredients: recipe.ingredients,
                  directions: recipe.directions
                }
              }}>
                <td>{recipe.title}</td>
            </Link>
            <td>Ingredients:</td>
            {recipe.ingredients.map((ingredient, index) => <td>{ingredient}</td>)}
            &nbsp;
            <td>Directions:</td>
            <td className='listDirections'>{recipe.directions}</td>
            </tr>
        </tbody>
      </table>
    );


    return (
      <div className='book'>
        <div>
          <h3>Recipes</h3>
          {listRecipes}     
        </div>
      </div>        
    )
  }
}

export default AllRecipes;