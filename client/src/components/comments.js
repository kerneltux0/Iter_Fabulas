import React, {Component} from 'react';
import Comment from './comment';

class Comments extends Component {

  componentDidMount () {
    this.props.fetchComments(this.props.story.id)
  }


  render() {
    const renderComments = this.props.comments.map(comment => {
      return(<Comment comment={comment}/>)
    })

    return(
      <div>
        {renderComments}
      </div>
    )
  }
}

export default Comments