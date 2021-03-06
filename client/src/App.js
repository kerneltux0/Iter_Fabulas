import React, {Component} from 'react';
import StoriesContainer from './containers/storiesContainer';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Story from './components/story';
import Welcome from './components/welcome';

class App extends Component {
  
  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='/stories' component={StoriesContainer} />
            <Route path={`/stories/:storyId`} component={Story} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
