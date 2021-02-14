import React,{Component} from 'react';
// import './App.css';

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Axios from "axios";
import RecipeBook from "./RecipeBook";
import Main from "./main";
import './book.css';
class App extends Component {
  render() {



    return (
      <div >
     


     <BrowserRouter>
<div className="backdrop">
<p className="title">Menu</p>
  <nav>
    
      
        <Link   className="card recipe" to="/recipe_book"><p class="cardTitle">My Recipe book</p></Link>
        <Link className="card bigOven" to="/github"><img class="bigOvenImg" src="http://mda.bigoven.com/images/logos/BigOven_logo_rgb150x40.png" />
      <p className="cardTitle">Recipes from Big oven</p></Link>
        <Link className="card conversion" to="/products"><p class="cardTitle">Measurement Conversions</p></Link>
        <Link className="card timer" to="/user"><p class="cardTitle">Kitchen Timer</p></Link>
    
   
  </nav>


  <Switch>
    <Route path="/recipe_book" component={RecipeBook} />
    <Route exact path="/" component={Main} />
    <Route path="/*" component={NotFound} />
  </Switch>
</div>
</BrowserRouter>






      </div>        
    )
  }
}

export default App;









class Home extends Component {
  render(){
    return(
      <div>
        Home
      </div>
    );
  }
}

class NotFound extends Component {
  render(){
    return(
      <div>
       404 Not Found
      </div>
    );
  }
}