import React, {Component} from 'react';

class Story extends Component {

  handleLikes(storyId) {
    this.props.location.addLike(storyId)
  }

  render() {
    const story = this.props.location.story.story

    // const renderComments = story.comments.map(comment => {
    //   return(<p>{comment.content}</p>)
    // })

    return(
      <div>
        <h1>{story.title}</h1>
        <h2>By: {story.name}</h2>
        <h4>{story.location}</h4>
        <p>{story.content}</p>
        <button onClick={this.handleLikes(story.id)}>Likes: {story.likes}</button>
        <div>
          {/* {renderComments} */}
        </div>
      </div>
    )
  }
  
}

export default Story