import React, {Component} from 'react';
import StoryInput from './storyInput';
import {Link, Route, BrowserRouter} from 'react-router-dom';
import Story from './story';


class Stories extends Component {

  render(){
    const storyList = this.props.stories.map(story => {
      return(<li><Link to={`/stories/${story.id}`}>{story.title}</Link></li>)
    })
    return(
      <div>
        <h1>Stories appear here!</h1>
        <ul>
          {storyList}
        </ul>
        <div>
          <StoryInput />
        </div>
        <Route path={`/stories/:storyId`} component={Story}/>
      </div>
    )
  }
}

export default Stories