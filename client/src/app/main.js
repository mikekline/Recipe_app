import React,{Component} from 'react';
import './main.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Axios from "axios";
import RecipeBook from "./RecipeBook";
<RecipeBook />
class Main extends Component {
  render() {
 


    return (
      <div class="mainPage">
        <header>
          A Cook's tale  in recipes and other nonsense
        </header>


   










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

export default Main;