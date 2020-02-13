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

  handleSubmit(event){
    event.preventDefault()
    this.props.addComment(this.props.storyId,this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <textarea onChange={(event)=>this.handleChange(event)} name='content' rows={10} cols={30} value={this.state.content} placeholder='Your comment' /><br/>
          <input type='submit' value='Submit Comment' />
        </form>
      </div>
    )
  }
}

export default CommentInput