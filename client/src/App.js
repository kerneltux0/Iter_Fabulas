import React, {Component} from 'react';
import Registrations from './containers/registrations';
import Signup from './components/signup';
import Login from './components/login';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  
  render(){
    return(
      <div>
        <BrowserRouter>
          <Route exact path='/' component={Registrations} />
          <Route exact path='/signup' component={Signup} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
