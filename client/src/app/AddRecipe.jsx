import React, {Component} from 'react';
import axios from 'axios';
require('dotenv').config();
const addRecipe = process.env.REACT_APP_ADDRECIPE;



class AddRecipe extends Component {
  constructor() {
    super();

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeIngredientHandler = this.onChangeIngredientHandler.bind(this); 
    this.addIngredientHandler = this.addIngredientHandler.bind(this);
    this.minusIngredientHandler = this.minusIngredientHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { 
      title: '',
      ingredients: [{ 
        amount: '', 
        unit: '',
        ingredient: ''
      }],
      directions: ''
    };
  }



  onChangeHandler(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  
  onChangeIngredientHandler = index => eventObject =>{
    const newIngredients = this.state.ingredients.map((ingredient, ingredentIndex) => {
      if (index !== ingredentIndex) return ingredient;
      return {...ingredient, [eventObject.target.name]: eventObject.target.value}
    });

    this.setState({
      ingredients: newIngredients
    });
  }

  

  addIngredientHandler(){
    this.setState({
      ingredients: this.state.ingredients.concat([{ 
        amount: '', 
        unit: '',
        ingredient: ''
      }])
    })
  }

  minusIngredientHandler = index => () => {
    this.setState({
      ingredients: this.state.ingredients.filter( 
        (element, elementIndex)=> index !== elementIndex || index === 0)
    });
  }


  //on submit, form adds inputs to state and sends state to server endpoint with post
  onSubmit(e) {
    e.preventDefault();

   

    //concatenates each ingredent then concatenates amount, unit, and ingredient name to send to server as one
    const allIngredients = this.state.ingredients.map((ingredient) => {
      return ( `
        ${ingredient.amount}${ingredient.unit} 
        \u00A0\u00A0 - \u00A0\u00A0 
        ${ingredient.ingredient}  
      `);    
    });
      

    //prepares state to send to server and send with a post request
    const newRecipe = {
      title: this.state.title,
      ingredients: allIngredients, //change later to be an array of ingrediants
      directions: this.state.directions
    };
    
    axios.post(addRecipe, newRecipe)
        .then(res => {console.log(res.data);})
        .catch(function (error){
            console.log(error);
        })
            
    

    //resets state
    this.setState({
      title: '',
      ingredients: [{ 
        amount: '', 
        unit: '',
        ingredient: ''
      }], 
      directions: ''
    })
  }




  render() {
    return (
      <div className='book'>
        <h3>Add a recipe</h3>
        <form onSubmit={this.onSubmit}>  
          <label>Title: </label>
            <input
              className='recipeTitle'
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.onChangeHandler}
            />

          <label>Ingredients: </label>
            {this.state.ingredients.map((ingredient, index) => (
                <span key={ingredient.index}>
                  <input
                    className='amount'
                    type='text'
                    name='amount'
                    value={ingredient.amount}
                    onChange={this.onChangeIngredientHandler(index)}
                  /> 
                  <select 
                    className='amount' 
                    name='unit'
                    value={ingredient.unit} 
                    onChange={this.onChangeIngredientHandler(index)}
                  >            
                      <option value=''></option>
                      <option value='kg'>kg</option>
                      <option value='g'>g</option>
                      <option value='lbs'>lbs</option>
                      <option value='oz'>oz</option>
                      <option value='l'>l</option>
                      <option value='ml'>ml</option>
                      <option value='fl oz'>fl oz</option>
                      <option value='cups'>cups</option>
                      <option value='tbsp'>tbs</option>
                      <option value='tsp'>tsp</option>
                  </select>
                  &nbsp;&nbsp;&nbsp;
                  <input
                    className='ingredient'
                    type='text'
                    name='ingredient'
                    value={ingredient.ingredient}
                    onChange={this.onChangeIngredientHandler(index)}
                  />
                  <button
                    type="button"
                    className="addSubtractButtons"
                    onClick={this.addIngredientHandler}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="addSubtractButtons"
                    onClick={this.minusIngredientHandler(index)}
                  >
                    -
                  </button>
                </span>
            ))}
   
          <label>Directions: </label>
            <textarea
              className='directions'
              type='text'
              name='directions'
              value={this.state.directions}
              onChange={this.onChangeHandler}
            />
          <button className='submit'>Add recipe</button>
        </form>
      </div>        
    )
  }
}

export default AddRecipe;