<BrowserRouter>
<div class="backdrop">
<p class="title">Menu</p>
  <nav>
    
      
        <Link   class="card recipe" to="/recipe_book"><p class="cardTitle">My Recipe book</p></Link>
        <Link class="card bigOven" to="/github"><img class="bigOvenImg" src="http://mda.bigoven.com/images/logos/BigOven_logo_rgb150x40.png" />
      <p class="cardTitle">Recipes from Big oven</p></Link>
        <Link class="card conversion" to="/products"><p class="cardTitle">Measurement Conversions</p></Link>
        <Link class="card timer" to="/user"><p class="cardTitle">Kitchen Timer</p></Link>
    
   
  </nav>


  <Switch>
    <Route path="/recipe_book" component={RecipeBook} />
    <Route exact path="/" component={Main} />
    <Route path="/*" component={NotFound} />
  </Switch>
</div>
</BrowserRouter>



<div class="backdrop">
<p class="title">Menu</p>
  
<nav>
  <a class="card recipe" href="">
    <p class="cardTitle">My Recipe book</p>
  </a>

  <a class="card bigOven" href="">
    <img class="bigOvenImg" src="http://mda.bigoven.com/images/logos/BigOven_logo_rgb150x40.png" />
    <p class="cardTitle">Recipes from Big oven</p>
  </a>

  <a class="card conversion" href="">
    <p class="cardTitle">Measurement Conversions</p>
  </a>

  <a class="card timer" href="">
    <p class="cardTitle">Kitchen Timer</p>
  </a>
</nav>
</div> 




-----------------------------------------------------------------------------------------------------------
app.js

import React,{Component} from 'react';
import './App.css';
// import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Axios from "axios";
import RecipeBook from "./RecipeBook";
<RecipeBook />
class App extends Component {
  render() {
    Axios({
      method: "GET",
      url: "http://localhost:3000/",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log(res.data.message);
    });


    return (
      <div class="mainPage">
        <header>
          A Cook's tale  in recipes and other nonsense
        </header>


   

        <Router>
<div class="backdrop">
<p class="title">Menu</p>
  <nav>
    
      
        <Link class="card recipe" to="/recipe_book" ><p class="cardTitle">My Recipe book</p></Link>
        <Link class="card bigOven" to="/github"><img class="bigOvenImg" src="http://mda.bigoven.com/images/logos/BigOven_logo_rgb150x40.png" />
      <p class="cardTitle">Recipes from Big oven</p></Link>
        <Link class="card conversion" to="/products"><p class="cardTitle">Measurement Conversions</p></Link>
        <Link class="card timer" to="/user"><p class="cardTitle">Kitchen Timer</p></Link>
    
   
  </nav>


  
    <Route path="/recipe_book" component={RecipeBook} />
    <Route exact path="/" component={Home} />
    <Route path="/*" component={NotFound} />
  
</div>
</Router>
     







        <footer>
          <ul>
            <li>Copyright &copy; Michael R. Kline 2020. All Rights Reserved. </li>
          </ul>
        </footer>
          
        <div class="rotate">Please rotate Device</div>
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


