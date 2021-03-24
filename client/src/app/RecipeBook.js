import React, {Component} from 'react';
import axios from 'axios';
import './RecipeBook.css';



class RecipeBook extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeIngredients = this.onChangeIngredients.bind(this);
    this.onChangeDirections = this.onChangeDirections.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = { 
      title: '',
      ingredients: '',
      directions: '',
      allRecipes: []
    };
  }

  //gets a list of all recipes from server
  componentDidMount() {
    axios.get('http://localhost:4000/recipe_app/recipes')
        .then(response => {
            this.setState({allRecipes: response.data.data});
            console.log(this.state.allRecipes)
        })
        .catch(function (error){
            console.log(error);
        })
  }

  onChangeTitle(e) {
    this.setState({
        title: e.target.value
    });
  }

  onChangeIngredients(e) {
    this.setState({
      ingredients: e.target.value
    });
  }

  onChangeDirections(e) {
    this.setState({
      directions: e.target.value
    });
  }

  onSubmit(e) {
    //on submitting form adds form inputs to state and sends state to server endpoint with post
    e.preventDefault();
    
    console.log(`Form submitted:`);
    console.log(`Title: ${this.state.title}`);
    console.log(`Ingredients: ${this.state.ingredients}`);
    console.log(`Directions: ${this.state.directions}`);

    const newRecipe = {
      title: this.state.title,
      ingredients: this.state.ingredients,
      directions: this.state.directions
    }
    
    axios.post('http://localhost:4000/recipe_app/add_recipe', newRecipe)
            .then(res => {console.log(res.data);
            axios.get('http://localhost:4000/recipe_app/recipes')
        .then(response => {
            this.setState({allRecipes: response.data.data});
            console.log(this.state.allRecipes)
        })
        .catch(function (error){
            console.log(error);
        })
            
      });

    //resets state
    this.setState({
      title: '',
      ingredients: '',
      directions: ''
    })
  }




  render() {
    //gets allRecipes state once loaded from server to be displayed
    const listRecipes=this.state.allRecipes.map((recipe)=>
    <tr key={recipe.key}>
        <td>{recipe.title}</td>
        <td>{recipe.ingredients}</td>
        <td>{recipe.directions}</td>
    </tr>
    );



    return (
      <div className="book">
        <h3>Add a recipe</h3>
        <form onSubmit={this.onSubmit}>  
          <label>Title: </label>
            <input
              type='text'
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          <label>Ingredients: </label>
            <input
              type='text'
              value={this.state.ingredients}
              onChange={this.onChangeIngredients}
            />
          <label>Directions: </label>
            <input
              type='text'
              value={this.state.directions}
              onChange={this.onChangeDirections}
            />
          <input type="submit" value="Add recipe"/>
        </form>
        
        <div>
          <h3>Recipes</h3>

          {listRecipes}
            
        </div>

      </div>        
    )
  }
}

export default RecipeBook;

