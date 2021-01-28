import React,{Component} from 'react';
import './book.css';



class RecipeBook extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }



  render() {
    return (
      <div class="book">

    <form>  
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
    </form>
        
      </div>        
    )
  }
}

export default RecipeBook;

