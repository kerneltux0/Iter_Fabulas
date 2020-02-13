import React, {Component} from 'react';

class CommentInput extends Component {
  state={
    content: ''
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form>
          <textarea onChange={(event)=>this.handleChange(event)} name='content' rows={10} cols={30} value={this.state.content} placeholder='Your comment' /><br/>
          <input type='submit' value='Submit Comment' />
        </form>
      </div>
    )
  }
}

export default CommentInput