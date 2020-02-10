import React, {Component} from 'react';
import StoryInput from './storyInput';
import {Link} from 'react-router-dom';


class Stories extends Component {

  render(){
    const storyList = this.props.stories.map(story => {
      return(
        <li>
          <Link to={{
            pathname: `/stories/${story.id}`,
            story: {story}
          }}>{story.title}</Link>
        </li>
      )
    })

    return(
      <div>
        <h1>Stories appear here!</h1>
        <ul>
          {storyList}
        </ul>
        <div>
          <StoryInput addStory={this.props.addStory}/>
        </div>
      </div>
    )
  }
}

export default Stories