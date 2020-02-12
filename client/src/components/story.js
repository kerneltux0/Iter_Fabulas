import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Story extends Component {


  render() {
    const story = this.props.location.story

    // const renderComments = story.comments.map(comment => {
    //   return(<p>{comment.content}</p>)
    // })

    return(
      <div>
        <button><Link to={'/'}>Story List</Link></button>
        <h1>{story.title}</h1>
        <h2>By: {story.name}</h2>
        <h4>{story.location}</h4>
        <p>{story.content}</p>
        <div>
          {/* {renderComments} */}
        </div>
      </div>
    )
  }
  
}

export default Story;