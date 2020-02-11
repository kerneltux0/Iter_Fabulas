import React, {Component} from 'react';

class Story extends Component {

  render() {
    const story = this.props.location.story.story
    
    return(
      <div>
        <h1>{story.title}</h1>
        <h2>By: {story.name}</h2>
        <h4>{story.location}</h4>
        <p>{story.content}</p>
        <button>Likes: {story.likes}</button>
      </div>
    )
  }
  
}

export default Story