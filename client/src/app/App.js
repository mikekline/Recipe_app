import React,{Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import RecipeBook from './RecipeBook.jsx';
import './css/App.css';




class App extends Component {
  render() {

    return (
      <div className='mainPage'>
     
        <header>
          A Cook's tale  in recipes and other nonsense
        </header>

        <BrowserRouter>
          <div className='backdrop'>
            <p className='title'>Menu</p>
            
            <nav className='mainNav'>      
              <Link className='card recipe' to='/recipe_book'>
                <p className='cardTitle'>My Recipe book</p>
              </Link>
              <Link className='card bigOven' to='/bigoven'>
                <img 
                  className='bigOvenImg' 
                  src='http://mda.bigoven.com/images/logos/BigOven_logo_rgb150x40.png' 
                  alt='BigOven logo'
                />
                <p className='cardTitle'>Recipes from Big oven</p>
              </Link>
              <Link className='card conversion' to='/products'>
                <p className='cardTitle'>Measurement Conversions</p>
              </Link>
              <Link className='card timer' to='/user'>
                <p className='cardTitle'>Kitchen Timer</p>
              </Link>
            </nav>

            <Switch>
              <Route path='/recipe_book' component={RecipeBook} />
              <Route exact path='/' component={Home} />
              <Route path='/*' component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>

        <footer>
          <ul>
            <li>Copyright &copy; Michael R. Kline 2020. All Rights Reserved. </li>
          </ul>
        </footer>
          
        <div className='rotate'>Please rotate Device</div>
      </div>        
    )
  }
}

export default App;





class Home extends Component {
  render(){
    return(
      <div>
        
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

