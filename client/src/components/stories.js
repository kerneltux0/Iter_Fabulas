import React, {Component} from 'react';
import StoryInput from './storyInput';
class Stories extends Component {

  render(){
    const storyList = this.props.stories.map(story => {
      return(<li>{story.title}</li>)
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
      </div>
    )
  }
}

export default Stories