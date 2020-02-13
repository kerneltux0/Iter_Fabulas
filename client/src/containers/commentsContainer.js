import React, {Component} from 'react';
import Comments from '../components/comments';
import CommentInput from '../components/commentInput';

class CommentsContainer extends Component {

  render(){
    return(
      <div>
        <Comments />
        <CommentInput />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addComment: () => dispatch(addComment())
  }
}

export default CommentsContainer;