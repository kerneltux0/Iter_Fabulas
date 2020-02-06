import React, {Component} from 'react';
import StoriesContainer from './containers/storiesContainer';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  
  render(){
    return(
      <div>
        <BrowserRouter>
          <Route exact path='/' component={StoriesContainer} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
