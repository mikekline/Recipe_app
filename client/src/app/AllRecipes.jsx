import React, {Component} from 'react';
import axios from 'axios';



class AllRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      allRecipes: []
    };
  }





  //gets a list of all recipes from server
  componentDidMount() {
    axios.get('http://localhost:4000/recipe_app/recipes')
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
              <td>{recipe.title}</td>
              <td>Ingredients:</td>
              <td>&nbsp;&nbsp;{recipe.ingredients}</td>
              <td>Directions:</td>
              <td>&nbsp;&nbsp;{recipe.directions}</td>
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