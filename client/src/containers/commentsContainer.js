import React, {Component} from 'react';
import Comments from '../components/comments';
import CommentInput from '../components/commentInput';
import {connect} from 'react-redux';

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
    addComment: (id,comment) => dispatch(addComment(id,comment))
  }
}

export default connect(null,mapDispatchToProps)(CommentsContainer);