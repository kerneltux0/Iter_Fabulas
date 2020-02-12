import React, {Component} from 'react';

class CommentInput extends Component {
  state={
    content: ''
  }

  render() {
    return(
      <div>
        <form>
          <textarea value='state.content' placeholder='Your comment' />
          <input type='submit' value='Submit Comment' />
        </form>
      </div>
    )
  }
}

export default CommentInput