import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {addLike} from '../actions/storiesActions';
import {connect} from 'react-redux';

class Story extends Component {

  handleLikes(storyId,storyData) {
    this.props.addLike(storyId,storyData)
  }

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
        <button onClick={this.handleLikes(story.id,story)}>Likes: {story.likes}</button>
        <div>
          {/* {renderComments} */}
        </div>
      </div>
    )
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return{
    addLike: (storyId,storyData) => dispatch(addLike(storyId,storyData))
  }
}

export default connect(null,mapDispatchToProps)(Story);