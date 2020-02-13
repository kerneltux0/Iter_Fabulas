import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import CommentsContainer from '../containers/commentsContainer';
import '../App.css'

class Story extends Component {


  render() {
    const story = this.props.location.story

    return(
      <div className="App">
        <button><Link to={'/stories'}>Story List</Link></button>
        <div className="story">
          <h1>{story.title}</h1>
          <h2>By: {story.name}</h2>
          <h4>{story.location}</h4>
          <p>{story.content}</p>
        </div>
        <div>
          <CommentsContainer story={story}/>
        </div>
      </div>
    )
  }
  
}

export default Story;