import React, {Component} from 'react';
import Registrations from './containers/registrations';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  
  render(){
    return(
      <div>
        <BrowserRouter>
          <Route exact path='/' component={Registrations} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
