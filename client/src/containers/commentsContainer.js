import React, {Component} from 'react';
import Comments from '../components/comments';
import CommentInput from '../components/commentInput';
import {connect} from 'react-redux';
import {addComment, fetchComments} from '../actions/storiesActions';

class CommentsContainer extends Component {

  render(){
    return(
      <div>
        <Comments comments={this.props.comments} story={this.props.story} fetchComments={this.props.fetchComments} loading={this.props.loading}/>
        <CommentInput addComment={this.props.addComment} storyId={this.props.story.id}/>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    comments: state.comments,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addComment: (storyId,comment) => dispatch(addComment(storyId,comment)),
    fetchComments: (storyId) => dispatch(fetchComments(storyId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentsContainer);