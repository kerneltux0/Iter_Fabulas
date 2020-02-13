import React, {Component} from 'react';
import Comments from '../components/comments';
import CommentInput from '../components/commentInput';
import {connect} from 'react-redux';
import {addComment} from '../actions/storiesActions';

class CommentsContainer extends Component {

  render(){
    return(
      <div>
        <Comments />
        <CommentInput addComment={this.props.addComment} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addComment: (storyId,comment) => dispatch(addComment(storyId,comment))
  }
}

export default connect(null,mapDispatchToProps)(CommentsContainer);