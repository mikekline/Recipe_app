import React, {Component} from 'react';
import axios from 'axios';



class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { 
      title: '',
      amount: '',
      unit: '',
      ingredient: '',
      ingredients: '', 
      directions: ''
    };
  }



  onChangeHandler(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  //on submit, form adds inputs to state and sends state to server endpoint with post
  onSubmit(e) {
    e.preventDefault();


    //concatenates amount, unit, and ingredient name to send to server as one
    const ingredientWithAmount = `
      ${this.state.amount}${this.state.unit} 
      \u00A0\u00A0 - \u00A0\u00A0 
      ${this.state.ingredient}
    `;    

  


    //prepares state to send to server and send with a post request
    const newRecipe = {
      title: this.state.title,
      ingredients: ingredientWithAmount, //change later to be an array of ingrediants
      directions: this.state.directions
    };
    
    axios.post('http://localhost:4000/recipe_app/add_recipe', newRecipe)
        .then(res => {console.log(res.data);})
        .catch(function (error){
            console.log(error);
        })
            
    


    //resets state
    this.setState({
      title: '',
      amount: '',
      ingredient: '',
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
            <span>
              <input
                className='amount'
                type='text'
                name='amount'
                value={this.state.amount}
                onChange={this.onChangeHandler}
              /> 
              <select 
                className='amount' 
                name='unit'
                value={this.state.unit} 
                onChange={this.onChangeHandler}
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
                value={this.state.ingredient}
                onChange={this.onChangeHandler}
              />
            </span>
          <label>Directions: </label>
            <textarea
              className='directions'
              type='text'
              name='directions'
              value={this.state.directions}
              onChange={this.onChangeHandler}
            />
          <input type='submit' value='Add recipe'/>
        </form>
      </div>        
    )
  }
}

export default AddRecipe;